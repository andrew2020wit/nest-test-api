import { Controller, Get, Param } from '@nestjs/common';
import { CrudRestApiService } from './crud-rest-api.service';

// http://localhost:3000/api/crud-rest/entityA/
@Controller('api/crud-rest')
export class EntityController {
  constructor(private readonly entityService: CrudRestApiService) {}

  // @Post()
  // create(@Body() createEntityDto: any) {
  //   return this.entityService.create(createEntityDto);
  // }

  @Get(':entityKind')
  findAll(@Param() params) {
    return this.entityService.findAll(params.entityKind);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.entityService.findOne(+id);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateEntityDto: any) {
  //   return this.entityService.update(+id, updateEntityDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.entityService.remove(+id);
  // }
}
