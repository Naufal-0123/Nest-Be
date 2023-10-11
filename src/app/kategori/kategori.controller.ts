import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { KategoriService } from './kategori.service';
import {
  CreateKategoriDto,
  UpdateKategoriDto,
  findAllKategori,
} from './kategori.dto';
import { JwtGuard } from '../auth/auth.guard';
import { Pagination } from 'src/utils/decorator/pagination.decorator';
import {
  InjectCreatedBy,
  InjectUpdetedBy,
} from 'src/utils/decorator/inject-created_by.decorator';

@UseGuards(JwtGuard)
@Controller('kategori')
export class KategoriController {
  constructor(private kategoriService: KategoriService) {}

  @Post('create')
  async create(@InjectCreatedBy() payload: CreateKategoriDto) {
    //ganti @Body() dengan @InjectCreatedBy()
    return this.kategoriService.create(payload);
  }

  @Post('createBulk')
  async createBull(@Body() payload: CreateKategoriDto[]) {
    return this.kategoriService.createBulk(payload);
  }

  @Put('update/:id')
  updateKategori(
    @InjectUpdetedBy() payload: UpdateKategoriDto,
    @Param('id') id: string,
  ) {
    // console.log(payload, id);
    return this.kategoriService.updateKategori(+id, payload);
  }

  @Delete('delete/:id')
  deleteBook(@Param('id') id: string) {
    return this.kategoriService.deleteKategori(+id);
  }

  @Get('list')
  async getAllCategory(@Pagination() query: findAllKategori) {
    return this.kategoriService.getAllCategory(query);
  }

  @Get('detail/:id')
  getDetail(@Param('id') id: string) {
    return this.kategoriService.getDetail(Number(id));
  }
}
