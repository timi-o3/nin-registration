import { Linkedidentity } from "src/ninregistration/linkedidentity/entities/linkedidentity.entity";
import { Column,Entity,JoinColumn,OneToOne,PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Biodatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({nullable: true})
    middleName: string;

    @Column()
    lastName: string;

    @Column({nullable: true})
    dateofbirth: Date;

    @Column({nullable: true})
    nationality: string;

    @Column({nullable: true})
    countryofbirth: string;

    @Column({nullable: true})
    stateofbirth: string;

    @Column({nullable: true})
    townofbirth: string;

    @Column({nullable: true})
    residenceaddress: string;

    @Column({ default: true })
    proffesion: string;
    linkedIdentity: any;

    @OneToOne(() => Linkedidentity)
    @JoinColumn()
    LinkedIdentity: Linkedidentity;
}
