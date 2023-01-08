import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put, Query,
  Req,
  Res
} from "@nestjs/common";
import { ConsultationService } from "../services/consultation.service";
import { Consultation } from "../models/consultation.entity";
import { CreateConsultDtoDto } from "../models/createConsultDto.dto";
import { Observable } from "rxjs";
import { Pagination } from "nestjs-typeorm-paginate";

@Controller('consultation')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {

  }

  /*@Get()
  findAll(@Req() req: Request) {
    return this.consultationService.findAll();
  }*/

  @Get()
  index(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,):
    Observable<Pagination<Consultation>> {
    limit = limit > 100 ? 100 : limit;
    return this.consultationService.paginate(
      { page, limit, route: 'http://localhost:3000/consultation'}
    )
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
  delete(@Param('id') id: number) {
    return this.consultationService.remove(id);
  }
}