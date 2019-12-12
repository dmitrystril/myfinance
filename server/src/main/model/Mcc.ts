import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";

@Entity()
export class Mcc {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  code: number;

  @Column()
  description: string;
}
