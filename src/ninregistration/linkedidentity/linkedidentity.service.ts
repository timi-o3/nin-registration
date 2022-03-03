import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Biodatum } from '../biodata/entities/biodatum.entity';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';
import { Linkedidentity } from './entities/linkedidentity.entity';

@Injectable()
export class LinkedidentityService {
  linkedidentity: any;

  constructur() {}
  
  async create(createLinkedidentityDto: CreateLinkedidentityDto) {
    const newIdentity = await this.linkedidentity.create(CreateLinkedidentityDto)

    return this.linkedidentity.save(newIdentity);
  }

  async findAll() {
    return await this.linkedidentity.find();
  }

  async findOne(id: number) {
    return this.linkedidentity.findOne();
  }

  update(id: number, updateLinkedidentityDto: UpdateLinkedidentityDto) {
    return this.linkedidentity.update(id, updateLinkedidentityDto);
  }

  remove(id: number) {
    return this.linkedidentity.delete(id);
  }
}
