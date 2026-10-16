import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty({ message: 'Title harus diisi' })
    readonly title: string;

    @IsNotEmpty({ message: 'Author harus diisi' })
    readonly author: string;

    @IsNotEmpty({ message: 'ISBN harus diisi' })
    readonly isbn: string;

    @IsNotEmpty({ message: 'Published Year harus diisi' })
    @IsNumber({}, { message: 'Published Year harus berupa angka' })
    readonly publishedyear: number;
}