import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWTSECRETKEY } from 'src/main';
import { JwtPayloadExtDto } from '../dto/jwt-payload-ext.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWTSECRETKEY,
    });
  }

  async validate(payload: JwtPayloadExtDto): Promise<JwtPayloadExtDto> {
    return payload;
  }
}
