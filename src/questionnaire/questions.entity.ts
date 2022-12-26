import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Questionnaire {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  phone: number;

  @Column()
  BMI: number;

  // column for the questions that are answered and not answered
  @Column('text')
  questions: string;

  @Column('text')
  currentSymptoms: string;
}
