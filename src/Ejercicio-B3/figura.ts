// Definición de tipos y clases para figuras
export type Punto = {
    x: number;
    y: number;
}

export interface Figura {}

// Implementaciones de figuras
export class Rectangulo implements Figura {
    constructor(
        public inicio: Punto,
        public fin: Punto
    ) {}
}

export class Elipse implements Figura {
    constructor(
        public inicio: Punto,
        public fin: Punto
    ) {}
}

export class Linea implements Figura {
    constructor(
        public inicio: Punto,
        public fin: Punto
    ) {}
}

export class CuadradoDeTexto implements Figura {
    constructor(
        public inicio: Punto,
        public fin: Punto,
    ) {}
}

export class FlechaAcotada implements Figura {
    constructor(
        public inicio: Punto,
        public fin: Punto,
    ) {}
}
