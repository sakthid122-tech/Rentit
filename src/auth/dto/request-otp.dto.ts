import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RequestOtpDto {
  @IsString()
  @IsNotEmpty()
  mobile: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
