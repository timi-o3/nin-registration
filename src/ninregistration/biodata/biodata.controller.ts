import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Put } from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';

@Controller('users')
export class BiodataController {
  constructor(private readonly biodataService: BiodataService) {}

  @Post()
  create(@Body() createBiodatumDto: CreateBiodatumDto) {
    return this.biodataService.create(createBiodatumDto);
  }
  @Get()
  findAll() {
    return this.biodataService.findAll();
  }

  @Get('create')
  @Render('biodata/create-biodata.html')
  createForm(){
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biodataService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBiodatumDto: UpdateBiodatumDto) {
    return this.biodataService.update(+id, updateBiodatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biodataService.remove(+id);
  }
}
