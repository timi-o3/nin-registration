import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm' 
import { Repository } from 'typeorm';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';
import { Biodatum } from './entities/biodatum.entity';
 
@Injectable()
export class BiodataService {
  biodataService: any;
  constructor(
    @InjectRepository(Biodatum)
    private biodatumRepository: Repository<Biodatum>
  ){}

  async Create(CreateBiodatumDto: CreateBiodatumDto){
    const newCitizen = this.biodatumRepository.create(CreateBiodatumDto)
    return this.biodataService.save(newCitizen)
  }

  async findAll() {
    return await this.biodatumRepository.find();
  }

  async findOne(id: number) {
    return await this.biodatumRepository.findOne(id);
  }

  async update(id: number, updateBiodatumDto: UpdateBiodatumDto) {
    return await this.biodatumRepository.update(id,updateBiodatumDto);
  }

  async remove(id: number) {
    return await this.biodatumRepository.delete(id);
  }
}
