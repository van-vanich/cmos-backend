import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RivensEntity } from '../entities/rivens.entity';
import { UpdateRivenDto } from '../dto/UpdateRivenDto';
import { GeneratorService } from '../generator/generator.service';

@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(RivensEntity)
    private readonly rivenRepository: Repository<RivensEntity>,
    private readonly generatorService: GeneratorService,
  ) {}

  async saveCharacter(
    id: number,
    updateRivenDto: UpdateRivenDto,
  ): Promise<RivensEntity | null> {
    const riven = await this.rivenRepository.findOne({ where: { id } });
    if (!riven) {
      console.log(`Riven with ID ${id} not found`);
      return null;
    }

    if (updateRivenDto.bio) {
      riven.bio = this.generatorService.generateBio(updateRivenDto.bio);
    }
    if (updateRivenDto.name) {
      riven.name = updateRivenDto.name;
    }
    if (updateRivenDto.lore) {
      riven.lore = this.generatorService.generateLore(updateRivenDto.lore);
    }
    if (updateRivenDto.knowledge_base) {
      riven.knowledge_base = updateRivenDto.knowledge_base;
    }

    return this.rivenRepository.save(riven);
  }
}
