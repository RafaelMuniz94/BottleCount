import {
Entity,
Column,
PrimaryColumn,
CreateDateColumn,
UpdateDateColumn,
ManyToOne,
OneToMany
} from 'typeorm'

import Person from '@person/infra/typeorm/entities/Person'
import Beer from '@beer/infra/typeorm/entities/beer'

@Entity("caps")
class Caps{
    @PrimaryColumn('uuid')
    id: string;
    
    @Column()
    date: Date;


    @Column()
    location: string;


    @ManyToOne(() => Person)
    people: Person[];

    @OneToMany(() => Beer,beer => beer.name)
    beer:Beer;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}



export default Caps




