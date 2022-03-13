import { Module } from '@nestjs/common';
import { PantrysService } from './pantrys.service';
import { PantrysController } from './pantrys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pantry } from './entities/pantry.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pantry]), UsersModule],
  controllers: [PantrysController],
  providers: [PantrysService],
  exports: [PantrysService],
})
export class PantrysModule {}
