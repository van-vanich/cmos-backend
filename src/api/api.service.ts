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

  saveCharacter(updateRivenDto: UpdateRivenDto): RivensEntity | null {
    return this.rivenRepository.create({
      name: updateRivenDto.name,
      bio: this.generatorService.generateBio(updateRivenDto.bio),
      lore: this.generatorService.generateLore(updateRivenDto.lore),
      knowledge_base: updateRivenDto.knowledge_base,
      topics: this.generatorService.generateTopics(),
      adjectives: this.generatorService.generateAdjectives(),
      styleGeneral: this.generatorService.generateStyle().all,
      styleChat: this.generatorService.generateStyle().chat,
      stylePost: this.generatorService.generateStyle().post,
    });
  }

  async updateRivenByName(
    name: string,
    updateData: { ticker?: string; logo?: string },
  ) {
    const riven = await this.rivenRepository.findOneBy({ name });

    if (!riven) {
      console.log(`token with name=${name} not found`);
      return null;
    }

    if (updateData.ticker) {
      riven.ticker = updateData.ticker;
    }
    if (updateData.logo) {
      riven.logo = updateData.logo;
    }

    return this.rivenRepository.save(riven);
  }
}
