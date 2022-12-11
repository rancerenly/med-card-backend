import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Consultation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientName: string;

  @Column()
  doctorName: string;

  @CreateDateColumn()
  dateConclusion: Date;

  @Column()
  recommendation: string;

  @Column()
  diagnosis: string;

  @Column()
  department: string;

}