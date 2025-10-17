import { Autore } from "src/autores/entities/autore.entity";

export class CreateLibroDto {
    titulo: string;
    genero: string;
    autor: Autore;
}
