import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Type } from "class-transformer";

@Entity()
export class Consultation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientName: string;

  @Column()
  doctorName: string;

  @Column()
  dateConclusion: Date;

  @Column()
  recommendation: string;

  @Column()
  diagnosis: string;

  @Column()
  department: string;

}