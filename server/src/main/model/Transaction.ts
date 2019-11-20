import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    date: Date;

    @Column()
    description: string;

    @Column()
    mcc: number;

    @Column()
    amount: number;

    @Column({ length: 3 })
    currency: string;

    @Column()
    cashback: number;

    @ManyToOne(type => User, user => user.transactions)
    @JoinColumn({ name: "user_id" })
    user: User;
}
