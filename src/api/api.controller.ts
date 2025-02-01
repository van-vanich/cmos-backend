import { Controller } from '@nestjs/common';

@Controller('api')
export class ApiController {}


// API:
// /api/session - init session for create AI CM agent(return id of session)
// api/{id} -