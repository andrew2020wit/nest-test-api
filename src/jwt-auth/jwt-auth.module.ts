import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthController } from './controller/jwt-auth.controller';
import { JwtAuthService } from './jwt-auth.service';
import { JwtUserService } from './jwt-user-service/jwt-user.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  controllers: [JwtAuthController],
  providers: [JwtAuthService, JwtStrategy, LocalStrategy, JwtUserService],
  imports: [
    PassportModule.register({
      // defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      //secret: '111',
      secret: '111',
      signOptions: {
        expiresIn: '36000s',
      },
    }),
  ],
})
export class JwtAuthModule {}
