import { Module } from '@nestjs/common';
import { GlobalService } from './global.service';
import { GlobalController } from './global.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from 'src/models';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  providers: [GlobalService],
  controllers: [GlobalController],
})
export class GlobalModule {}
