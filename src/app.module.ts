import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PantrysModule } from './pantrys/pantrys.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'pantry',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    PantrysModule,
    ProductsModule,
    AuthModule,
  ],
})
export class AppModule {}
