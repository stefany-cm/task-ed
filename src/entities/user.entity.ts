import { Tag } from "./tag.entity";
import { State } from "src/utils/enums";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity('user')
export class User {
    @PrimaryGeneratedColumn('increment') 
    id:number

    @Column({
        nullable: false,
        type: 'varchar',
        length: 45,
    })
    name:string

    @Column({
        nullable: false,
        type: 'varchar',
        length: 100,
    })
    email:string

    @Column({
        nullable: false,
        type: 'varchar',
        length: 100
    })
    key_secreet:string

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_at:Timestamp

    @Column('timestamp')
    update_at:Timestamp

    @Column({
        type: 'enum',
        enum: State,
        default: State.ENABLE,
    })
    state:State

    @OneToMany(() => Tag, tag => tag.user)
    tag: Tag[]
}

