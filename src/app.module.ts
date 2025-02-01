import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { GeneratorModule } from './generator/generator.module';

@Module({
  imports: [ApiModule, GeneratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
