import { TagsTask } from "./tags_task.entity";
import { State, Status } from "src/utils/enums";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('task')
export class Task {
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
        length: 100,
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
        enum: Status,
    })
    status:Status

    @Column({
        type: 'enum',
        enum: State,
        default: State.ENABLE,
    })
    state:State

    // Relations
    @OneToMany(() => TagsTask, tagstask => tagstask.task)
    tagstask: TagsTask[]
}