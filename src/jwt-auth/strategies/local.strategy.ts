import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { JwtPayloadDto } from '../dto/jwt-payload.dto';
import { JwtAuthService } from '../jwt-auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: JwtAuthService) {
    super({ usernameField: 'login' });
  }

  async validate(
    login: string,
    password: string,
  ): Promise<JwtPayloadDto | undefined> {
    const user = await this.authService.validateUserForJWT(login, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
