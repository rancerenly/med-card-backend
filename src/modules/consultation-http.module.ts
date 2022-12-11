import { Module } from '@nestjs/common';
import { ConsultationModule } from "./consultation.module";
import { ConsultationService } from "../services/consultation.service";
import { ConsultationController } from "../controllers/consultation.controller";

@Module({
  imports: [ConsultationModule],
  providers: [ConsultationService],
  controllers: [ConsultationController]
})
export class ConsultationHttpModule {}
