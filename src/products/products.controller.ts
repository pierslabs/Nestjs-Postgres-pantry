import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '@nestjs/passport';
import { Product } from './entities/product.entity';
import { authenticate } from 'passport';

@Controller(':pantryid/products')
@UseGuards(AuthGuard('jwt'))
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(
    @Body() createProductDto: CreateProductDto,
    @Headers('Authorization') auth,
    @Param('pantryid') pantryId,
  ): Promise<Product> {
    return this.productsService.create(createProductDto, auth, pantryId);
  }

  @Get()
  findAll(
    @Param('pantryid') pantryId,
    @Headers('Authorization') auth,
  ): Promise<Product[]> {
    return this.productsService.findAll(pantryId, auth);
  }

  @Get(':id')
  findOne(
    @Param('pantryid') pantryId,
    @Headers('Authorization') auth,
    @Param('id') id,
  ) {
    return this.productsService.findOne(pantryId, auth, id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @Param('pantryid') pantryId,
    @Headers('Authorization') auth,
  ): Promise<Product> {
    return this.productsService.update(+id, updateProductDto, pantryId, auth);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Param('pantryid') pantryId,
    @Headers('Authorization') auth,
  ): Promise<void> {
    return this.productsService.remove(+id, pantryId, auth);
  }
}
