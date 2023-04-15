import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  
  @ApiProperty({
    description: 'Enter your email',
    example: 'youremail@mailservice.com'
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Enter your password',
    example: 'Something12345'
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}