import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
    @IsEmail({}, { message: 'Email tidak valid' })
    email: string;

    @IsNotEmpty({ message: 'Password harus diisi' })
    @MinLength(8, { message: 'Password minimal 8 karakter' })
    password: string;
}