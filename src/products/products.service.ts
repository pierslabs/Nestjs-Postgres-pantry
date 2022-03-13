import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pantry } from 'src/pantrys/entities/pantry.entity';
import { PantrysService } from 'src/pantrys/pantrys.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
    private readonly pantryService: PantrysService,
    private readonly userService: UsersService,
  ) {}

  async create(
    { name, quantity }: CreateProductDto,
    auth: string,
    pantryId: number,
  ): Promise<Product> {
    const pantry = await this.pantryService.findOne(pantryId, auth);

    const newProduct = this.productRepo.create({ name, quantity, pantry });
    return this.productRepo.save(newProduct);
  }

  async findAll(pantryId: number, auth: string): Promise<Product[]> {
    const pantry = await this.pantryService.findOne(pantryId, auth);

    if (!pantry) {
      throw new NotFoundException('has not privileges');
    }

    return await this.productRepo.find({ where: { pantry: pantryId } });
  }

  async findOne(pantryId: number, auth: string, id: number): Promise<Product> {
    const pantry = await this.pantryService.findOne(pantryId, auth);

    const product = await this.productRepo.findOne(+id, {
      relations: ['pantry'],
    });

    if (!product || pantry.id !== product.pantry.id) {
      throw new NotFoundException('resource not found or has not privileges');
    }

    return product;
  }

  async update(
    id: number,
    { name, quantity }: UpdateProductDto,
    pantryId: number,
    auth: string,
  ): Promise<Product> {
    const pantry = await this.pantryService.findOne(pantryId, auth);

    const product = await this.productRepo.findOne(+id, {
      relations: ['pantry'],
    });

    if (!product || pantry.id !== product.pantry.id) {
      throw new NotFoundException('resource not found or has not privileges');
    }

    const updateProduct = await this.productRepo.preload({
      id,
      name,
      quantity,
    });

    return this.productRepo.save(updateProduct);
  }

  async remove(id: number, pantryId: number, auth: string): Promise<void> {
    const product = await this.productRepo.findOne(id, {
      relations: ['pantry'],
    });
    const pantry = await this.pantryService.findOne(pantryId, auth);

    if (!product || pantry.id !== product.pantry.id) {
      throw new NotFoundException('resource not found or has not privileges');
    }

    this.productRepo.remove(product);
  }
}
