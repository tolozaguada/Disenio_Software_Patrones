export interface Aula {
    disponibilidad : boolean,
    capacidad: number
}

export class AulaComun implements Aula {
    constructor (
        public disponibilidad : boolean,
        public capacidad: number
    ){}
}

export class AulaMagna implements Aula {
    constructor (
        public disponibilidad : boolean,
        public capacidad: number
    ){}
}

export class LaboratorioInformatica implements Aula {
    constructor (
        public disponibilidad : boolean,
        public capacidad: number,
    ){}
}