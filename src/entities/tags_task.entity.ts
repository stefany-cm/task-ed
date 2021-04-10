import { Tag } from "./tag.entity";
import { Task } from "./task.entity";
import { State } from "src/utils/enums";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('tags_task')
export class TagsTask {
    @PrimaryGeneratedColumn('increment') 
    id:number

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
    @ManyToOne((type) => Tag, (tag) => tag.tagstask)
    @JoinColumn({ name: 'fk_tag' })
    tag: Tag

    @ManyToOne((type) => Task, (task) => task.tagstask)
    @JoinColumn({ name: 'fk_task' })
    task: Task
}