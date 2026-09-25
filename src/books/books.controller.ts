import { Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';

@Controller('books')
export class BooksController {
    //menampilkan data

    @Get()
    findAll() {
        return 'Menampilkan semua data buku';
    }

    //menyimpan data 
    @Post()
    simpanData() {
        return 'Menyimpan data buku';
    }
    //mengupdate data
    @Put(':id')
    updateData(@Param('id') id: string) {
        return `Mengupdate data buku dengan ID: ${id}`;
    }
    //menghapus data
    @Delete(':id')
    deleteData(@Param('id') id: string) {
        return `Menghapus data buku dengan ID: ${id}`;
    }

}

