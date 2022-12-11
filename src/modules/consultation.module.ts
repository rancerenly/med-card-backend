import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultation } from "../models/consultation.entity";
import { ConsultationController } from "../controllers/consultation.controller";
import { ConsultationService } from "../services/consultation.service";


@Module({
  imports: [TypeOrmModule.forFeature([Consultation])],
  controllers: [ConsultationController],
  providers: [ConsultationService],
})
export class ConsultationModule {}