import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { Type } from 'class-transformer';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Consultation } from "../models/consultation.entity";
import { CreateConsultDtoDto } from "../models/createConsultDto.dto";

@Injectable()
export class ConsultationService {
 constructor(
   @InjectRepository(Consultation)
   private consultsRepository: Repository<Consultation>,
 ) {}

 findAll(): Promise<Consultation[]> {
  return this.consultsRepository.find();
 }

 findOne(id: number): Promise<Consultation> {
  return this.consultsRepository.findOneById(id);
 }

 create(consultation: CreateConsultDtoDto) : Promise<CreateConsultDtoDto> {
  return this.consultsRepository.save(consultation);
 }
  async update(id: number, consultation: CreateConsultDtoDto) {
  await this.consultsRepository.update(id, consultation);
 }

 remove(id: number) {
  console.log('on deleting??');
  return this.consultsRepository.delete(id);
 }
}