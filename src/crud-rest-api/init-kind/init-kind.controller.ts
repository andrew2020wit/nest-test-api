import { Body, Controller, Param, Post } from '@nestjs/common';
import { CrudRestApiService } from '../crud-rest-api.service';

@Controller('api/init-kind/crud-rest')
export class InitKindController {
  constructor(private readonly entityService: CrudRestApiService) {}

  // http://localhost:3000/api/init-kind/crud-rest/entityName

  @Post(':entityKind')
  async create(@Param() params, @Body() entities: any) {
    return this.entityService.initKind(params.entityKind, entities);
  }
}
