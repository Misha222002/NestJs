import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.ru", description: "Почтовый адрес" })
  @IsString({ message: "Должно быть строкой" })
  @IsEmail({}, { message: "Некорректрый Email" })
  readonly email: string;
  @ApiProperty({ example: "фыва123ыф", description: "Пароль пользователя" })
  @IsString({ message: "Должно быть строкой" })
  @Length(4, 16, { message: "Не меньше 4 и не больше 16" })
  readonly password: string;
}
