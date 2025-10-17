import { Libro } from "src/libros/entities/libro.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Autore {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    nacionalidad: string;
    @OneToMany(() => Libro, (libro) => libro.autor) 
    libros: Libro[];
}
