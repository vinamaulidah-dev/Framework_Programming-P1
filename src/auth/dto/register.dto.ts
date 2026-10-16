import { IsEmail, IsNotEmpty, Min } from 'class-validator';

export class RegisterDto {
    @IsNotEmpty({ message: 'Name harus diisi' })
    name: string;

    @IsNotEmpty({ message: 'Email harus diisi' })
    @IsEmail({}, { message: 'Format email tidak valid' })
    email: string;

    @IsNotEmpty({ message: 'Password harus diisi' })
    @Min(8, { message: 'Password minimal 8 karakter' })
    password: string;
}