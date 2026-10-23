import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    findOne(arg0: number) {
        throw new Error('Method not implemented.');
    }
    //fungsi untuk akses ke database
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>
    ){}

    //logic untuk mendapatkan semua buku
    async findAll(): Promise<Book[]> {
        //select * from book
        return await this.bookRepository.find({
            order:{createdAt:'DESC'}
        })
    }

    //simpan data 
    async simpanData(createBookDto: CreateBookDto): Promise<Book>{
        const newBook = this.bookRepository.create(createBookDto);

        return await this.bookRepository.save(newBook);
    }


}