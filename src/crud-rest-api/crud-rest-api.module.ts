import { Module } from '@nestjs/common';
import { EntityController } from './crud-rest-api.controller';
import { CrudRestApiService } from './crud-rest-api.service';
import { InitKindController } from './init-kind/init-kind.controller';

@Module({
  controllers: [EntityController, InitKindController],
  providers: [CrudRestApiService],
})
export class CrudRestApiModule {}
