import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RivensEntity } from '../entities/rivens.entity';
import {GeneratorModule} from "../generator/generator.module";

@Module({
  imports: [TypeOrmModule.forFeature([RivensEntity]), GeneratorModule],
  providers: [ApiService],
  controllers: [ApiController],
})
export class ApiModule {}
