import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JWTokenDTO } from './dto/token-object.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RequestWithJwtUserExtDto } from './interfaces/request-with-user-ext.interface';
import { RequestWithJwtUserDto } from './interfaces/request-with-user.interface';
import { JwtAuthService } from './jwt-auth.service';

@ApiTags('auth')
@Controller('api/jwt-auth')
export class JwtAuthController {
  constructor(private readonly authService: JwtAuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('get-token-obj')
  async login(@Request() req: RequestWithJwtUserDto): Promise<JWTokenDTO> {
    return this.authService.getTokenObject(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('update-token')
  async updateToken(
    @Request() req: RequestWithJwtUserExtDto,
  ): Promise<JWTokenDTO> {
    return await this.authService.updateToken(req.user);
  }

  @Get('test-free-route')
  testFree() {
    return 'this is free route';
  }

  @UseGuards(JwtAuthGuard)
  @Get('test-private-route')
  testPrivate() {
    return 'JwtAuthGuard: this is private route';
  }
}
