import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { UpdateRivenDto } from '../dto/UpdateRivenDto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post(':id')
  saveCharacters(
    @Param('id') id: number,
    @Body() updateRivenDto: UpdateRivenDto,
  ) {
    return this.apiService.saveCharacter(id, updateRivenDto);
  }
}
