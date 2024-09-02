import { IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'john@doe.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsOptional()
  @Min(1)
  @Max(9999)
  code?: number;
}
