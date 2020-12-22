import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CrudRestApiService } from './crud-rest-api.service';

// http://localhost:3000/api/crud-rest/user/
@Controller('api/crud-rest')
export class EntityController {
  constructor(private readonly entityService: CrudRestApiService) {}

  @Post(':entityKind')
  create(@Param() params, @Body() createEntityDto: any) {
    return this.entityService.createEntity(params.entityKind, createEntityDto);
  }

  @Get(':entityKind')
  findAll(@Param() params) {
    return this.entityService.getAllEntities(params.entityKind);
  }

  @Get(':entityKind/:id')
  findOne(@Param() params) {
    return this.entityService.getEntity(params.entityKind, params.id);
  }

  @Put(':entityKind/:id')
  update(@Param() params, @Body() updateEntityDto: any) {
    return this.entityService.updateEntity(
      params.entityKind,
      params.id,
      updateEntityDto,
    );
  }

  @Delete(':entityKind/:id')
  remove(@Param() params) {
    return this.entityService.deleteEntity(params.entityKind, params.id);
  }
}
