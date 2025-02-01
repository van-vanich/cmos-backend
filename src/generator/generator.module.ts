import { Module } from '@nestjs/common';
import { GeneratorService } from './generator.service';

@Module({
  providers: [GeneratorService]
})
export class GeneratorModule {}
