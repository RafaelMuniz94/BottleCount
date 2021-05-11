import {
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Entity
} from 'typeorm'


@Entity("person")
export default class Person{

        @PrimaryGeneratedColumn('uuid')
        id: string;

        @Column()
        name:string;

        @CreateDateColumn()
        created_at: Date;
    
        @UpdateDateColumn()
        updated_at: Date;
}