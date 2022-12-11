import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { Type } from 'class-transformer';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Consultation } from "../models/consultation.entity";

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
  return this.consultsRepository.findOneBy({ id });
 }

 create(consultation: Consultation) : Promise<Consultation> {
  return this.consultsRepository.save(consultation);
 }
  async update(id: number, consultation: Consultation) {
  await this.consultsRepository.update(id, consultation);
 }

 async remove(id: number): Promise<void> {
  await this.consultsRepository.delete(id);
 }
}