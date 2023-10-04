import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto, FindBookDto, UpdateBookDto } from './book.dto';
import { Pagination } from 'src/utils/decorator/pagination.decorator';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('list')
  getAllBook(@Pagination() findBookDto: FindBookDto) {
    console.log('findBookDto', findBookDto);
    return this.bookService.getAllBook(findBookDto);
  }

  @Get('detail/:id')
  getDetail(@Param('id') id: string) {
    return this.bookService.getDetail(Number(id));
  }

  @Post('create')
  createdBook(@Body() payload: CreateBookDto) {
    return this.bookService.createBook(payload);
  }

  @Put('update/:id')
  updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.updateBook(Number(id), updateBookDto);
  }

  @Delete('delete/:id')
  deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(+id);
  }
}
