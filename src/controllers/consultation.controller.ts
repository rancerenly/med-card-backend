import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res } from "@nestjs/common";
import { ConsultationService } from "../services/consultation.service";
import { Consultation } from "../models/consultation.entity";
import { CreateConsultDtoDto } from "../models/createConsultDto.dto";

@Controller('consultation')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {

  }

  @Get()
  findAll(@Req() req: Request) {
    return this.consultationService.findAll();
  }
  @Get(":id")
  findById(@Param() id: number, @Req() req: Request) {
    return this.consultationService.findOne(id);
  }

  @Post()
  async create(@Body() createConsultationDto: CreateConsultDtoDto) {
    return this.consultationService.create(createConsultationDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() createConsultationDto: CreateConsultDtoDto) {
    return this.consultationService.update(id, createConsultationDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.consultationService.remove(id);
  }
}