import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from 'typeorm';
import {Consultation} from "./models/consultation.entity";
import { ConsultationModule } from "./modules/consultation.module";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'medcard',
      entities: [Consultation],
      synchronize: true,
      autoLoadEntities: true,
    }), ConsultationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}