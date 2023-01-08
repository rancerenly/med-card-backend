import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Consultation } from "../models/consultation.entity";
import { CreateConsultDtoDto } from "../models/createConsultDto.dto";

import {
 paginate,
 Pagination,
 IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { from, Observable } from "rxjs";

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
 paginate(options: IPaginationOptions): Observable<Pagination<Consultation>> {
  return from(paginate<Consultation>(this.consultsRepository, options));
 }
 remove(id: number) {
  return this.consultsRepository.delete(id);
 }
}