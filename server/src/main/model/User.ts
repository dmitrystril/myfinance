import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Transaction } from "./Transaction";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column({ name: "email_verified" })
  emailVerified: boolean;

  @Column({ name: "creation_date" })
  creationDate: Date;

  @OneToMany(type => Transaction, transaction => transaction.user, { cascade: true })
  transactions: Transaction[];
}
