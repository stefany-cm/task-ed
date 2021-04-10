import { User } from "./user.entity";
import { State } from "src/utils/enums";
import { TagsTask } from "./tags_task.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('tag')
export class Tag {
    @PrimaryGeneratedColumn('increment') 
    id:number

    @Column({
        nullable: false,
        type: 'varchar',
        length: 45,
    })
    name:string

    @Column({
        type: 'varchar',
        length: 45,
    })
    description:string

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

    // Relations
    @ManyToOne((type) => User, (user) => user.tag)
    @JoinColumn({ name: 'fk_user' })
    user: User

    @OneToMany(() => TagsTask, tagstask => tagstask.tag)
    tagstask: TagsTask[]
}