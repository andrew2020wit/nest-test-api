import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CrudRestApiModule } from './crud-rest-api/crud-rest-api.module';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';

@Module({
  imports: [CrudRestApiModule, JwtAuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
