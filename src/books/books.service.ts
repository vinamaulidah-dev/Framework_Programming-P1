import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
    // sample data buku
    private books: Book[] = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            isbn: "978-0-7432-7356-5",
            publishedyear: 1925,
            isAvailable: true
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            isbn: "978-0-06-112008-4",
            publishedyear: 1960,
            isAvailable: true
        },
    ];

    //logic untuk mendapatkan semua buku
    findAll(): Book[] {
        return this.books;
    }

    //TAMBAHAN: logic untuk mendapatkan satu buku berdasarkan ID
    findOne(id: number): Book {
        const book = this.books.find(book => book.id === id);
        if (!book) {
            throw new NotFoundException(`Buku dengan ID ${id} tidak ditemukan.`);
        }
        return book;
    }

    //simpan data buku baru
    simpanData(createBookDto: CreateBookDto): Book {
        const newBook: Book = {
            id: this.books.length + 1,
            title: createBookDto.title,
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            publishedyear: createBookDto.publishedyear,
            isAvailable: true
        };
        this.books.push(newBook);
        return newBook;
    }

    //update data buku berdasarkan ID
    updateData(id: number, updateBookDto: CreateBookDto): Book {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error('Buku dengan id ${id} tidak ditemukan');
        }
        const updatedBook: Book = {
            ...this.books[bookIndex],
            title: updateBookDto.title,
            author: updateBookDto.author,   
            isbn: updateBookDto.isbn,
            publishedyear: updateBookDto.publishedyear
        };
        this.books[bookIndex] = updatedBook;
        return updatedBook;
    }

    //hapus data buku berdasarkan ID
    hapusData(id: number, createBookDto: CreateBookDto): Book {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error('Buku dengan ID ${id} tidak ditemukan.');
        }
        const deletedBook = this.books[bookIndex];
        this.books.splice(bookIndex, 1);
        return deletedBook;
    }

}