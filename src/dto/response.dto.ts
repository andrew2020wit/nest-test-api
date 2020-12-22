import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto {
  @ApiProperty()
  message?: string;
  @ApiProperty()
  source?: string;
  @ApiProperty()
  ok?: boolean;
  @ApiProperty()
  payload?: any;
  @ApiProperty()
  resultId?: string;
  constructor(source?: string) {
    this.ok = false;
    if (source) {
      this.source = source;
    }
  }
}
