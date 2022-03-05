import { Biodatum } from "src/ninregistration/biodata/entities/biodatum.entity";
import { Column,Entity,JoinColumn,OneToOne,PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => Biodatum)
    @JoinColumn()
    biodatum: Biodatum;
}
