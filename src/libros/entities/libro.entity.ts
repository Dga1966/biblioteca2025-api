import { Autore } from "src/autores/entities/autore.entity";

export class Libro {
    id: number;
    titulo: string;
    genero: string;
    autor: Autore;
}
