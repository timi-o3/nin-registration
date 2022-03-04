import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';

@Controller('users')
export class BiodataController {
  constructor(private readonly biodataService: BiodataService) {}
  @Get('Create')
  @Render('biodata/create-biodata.html')
  createForm(){

  }
  @Post()
  create(@Body() createBiodatumDto: CreateBiodatumDto) {
    return this.biodataService.Create(createBiodatumDto);
  }

  @Get()
  findAll() {
    return this.biodataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biodataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiodatumDto: UpdateBiodatumDto) {
    return this.biodataService.update(+id, updateBiodatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biodataService.remove(+id);
  }
}
