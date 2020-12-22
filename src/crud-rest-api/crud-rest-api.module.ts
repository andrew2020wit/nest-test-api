import { Module } from '@nestjs/common';
import { EntityController } from './crud-rest-api.controller';
import { CrudRestApiService } from './crud-rest-api.service';

@Module({
  controllers: [EntityController],
  providers: [CrudRestApiService],
})
export class CrudRestApiModule {}
