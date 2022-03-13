import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { PantrysModule } from 'src/pantrys/pantrys.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), PantrysModule, UsersModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
