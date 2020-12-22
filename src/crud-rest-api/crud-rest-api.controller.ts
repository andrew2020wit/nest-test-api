import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { waiter } from 'src/utils/waitre';
import { CrudRestApiService } from './crud-rest-api.service';

// http://localhost:3000/api/main/crud-rest/1000/user/
// delay - max - 3000ms
@Controller('api/main/crud-rest')
export class EntityController {
  constructor(private readonly entityService: CrudRestApiService) {}

  @Post(':delay/:entityKind')
  async create(@Param() params, @Body() createEntityDto: any) {
    await waiter(params.delay);
    return this.entityService.createEntity(params.entityKind, createEntityDto);
  }

  @Get(':delay/:entityKind')
  async findAll(@Param() params) {
    await waiter(params.delay);
    return this.entityService.getAllEntities(params.entityKind);
  }

  @Get(':delay/:entityKind/:id')
  async findOne(@Param() params) {
    await waiter(params.delay);
    return this.entityService.getEntity(params.entityKind, params.id);
  }

  @Put(':delay/:entityKind/:id')
  async update(@Param() params, @Body() updateEntityDto: any) {
    await waiter(params.delay);
    return this.entityService.updateEntity(
      params.entityKind,
      params.id,
      updateEntityDto,
    );
  }

  @Delete(':delay/:entityKind/:id')
  async remove(@Param() params) {
    await waiter(params.delay);
    return this.entityService.deleteEntity(params.entityKind, params.id);
  }
}
