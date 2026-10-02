export type Punto = {
    x: number;
    y: number;
};
export interface Figura {
}
export declare class Rectangulo implements Figura {
    inicio: Punto;
    fin: Punto;
    constructor(inicio: Punto, fin: Punto);
}
export declare class Elipse implements Figura {
    inicio: Punto;
    fin: Punto;
    constructor(inicio: Punto, fin: Punto);
}
export declare class Linea implements Figura {
    inicio: Punto;
    fin: Punto;
    constructor(inicio: Punto, fin: Punto);
}
export declare class CuadradoDeTexto implements Figura {
    inicio: Punto;
    fin: Punto;
    constructor(inicio: Punto, fin: Punto);
}
export declare class FlechaAcotada implements Figura {
    inicio: Punto;
    fin: Punto;
    constructor(inicio: Punto, fin: Punto);
}
//# sourceMappingURL=figura.d.ts.map