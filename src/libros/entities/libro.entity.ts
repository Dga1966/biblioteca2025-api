import { Autore } from "src/autores/entities/autore.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    titulo: string;
    @Column()
    genero: string;
    @ManyToOne(() => Autore, {eager: true})
    autor: Autore;
}
