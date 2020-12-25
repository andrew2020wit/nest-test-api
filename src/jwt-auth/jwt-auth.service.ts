import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadExtDto } from './dto/jwt-payload-ext.dto';
import { JwtPayloadDto } from './dto/jwt-payload.dto';
import { JWTokenDTO } from './dto/token-object.dto';
import { JwtUserService } from './jwt-user-service/jwt-user.service';

@Injectable()
export class JwtAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private jwtUserService: JwtUserService,
  ) {}

  async validateUserForJWT(
    login: string,
    password: string,
  ): Promise<JwtPayloadDto> {
    const user = this.jwtUserService.findOne(login);
    if (!user) {
      return null;
    }
    console.log('validateUserForJWT', user);
    const areEqual = password === user.password;
    if (!areEqual) {
      return null;
    }
    delete user.password;
    return user;
  }

  async getTokenObject(jwtPayloadDto: JwtPayloadDto): Promise<JWTokenDTO> {
    return {
      access_token: this.jwtService.sign({
        login: jwtPayloadDto.login,
        sub: jwtPayloadDto.id,
        role: jwtPayloadDto.role,
        fullName: jwtPayloadDto.fullName,
      }),
    };
  }

  async updateToken(jwtPayloadExtDto: JwtPayloadExtDto): Promise<JWTokenDTO> {
    return {
      access_token: this.jwtService.sign({
        login: jwtPayloadExtDto.login,
        sub: jwtPayloadExtDto.sub,
        role: jwtPayloadExtDto.role,
        fullName: jwtPayloadExtDto.fullName,
      }),
    };
  }
}
