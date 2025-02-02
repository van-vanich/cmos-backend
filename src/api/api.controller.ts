import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { UpdateRivenDto } from '../dto/UpdateRivenDto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  saveCharacters(@Body() updateRivenDto: UpdateRivenDto) {
    return this.apiService.saveCharacter(updateRivenDto);
  }

  @Patch('/:name')
  async updateRivenByName(
    @Param('name') name: string,
    @Body() updateData: { ticker?: string; logo?: string },
  ) {
    return this.apiService.updateRivenByName(name, updateData);
  }
}
