import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CrudRestApiModule } from './crud-rest-api/crud-rest-api.module';

@Module({
  imports: [CrudRestApiModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
