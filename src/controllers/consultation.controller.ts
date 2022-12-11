import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { ConsultationService } from "../services/consultation.service";
import { Consultation } from "../models/consultation.entity";

@Controller('consultation')
export class ConsultationController {
  constructor(private constultService: ConsultationService) {

  }
  @Get()
  async fillAll(@Res() res: Response) {
    const response = await this.constultService.findAll();
    return response;
  }

  @Get(":id")
  async findOne(@Param() id: number, @Res() res: Response) {
    const response = await this.constultService.findOne(id);
    return response;
  }

  @Post()
  async create(@Body() createConsultationDto: Consultation, @Res() res: Response) {
    const response = await this.constultService.create(createConsultationDto);
    return response;
  }

  @Put()
  async update(@Param() id: number, @Body() createConsultationDto: Consultation, @Res() res: Response) {
    const response = await this.constultService.update(id, createConsultationDto);
    return response;
  }
  @Delete()
  async delete(@Body() id: number, @Res() res: Response) {
    const response = await this.constultService.remove(id);
    return response;
  }
}