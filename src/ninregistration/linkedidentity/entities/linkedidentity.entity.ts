import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Linkedidentity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nin: string;

    @Column()
    bvn: string;

    @Column()
    phonenumber: string;

}
