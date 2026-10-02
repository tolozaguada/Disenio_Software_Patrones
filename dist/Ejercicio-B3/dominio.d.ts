import type { Figura, Punto } from "./figura.js";
export declare class Documento {
    agregar(figura: Figura): void;
    seleccionar(figura: Figura): void;
}
export declare class PilaDeshacer {
    registrar(accion: Accion): void;
}
export declare class Lienzo {
    repintar(): void;
}
export declare class Accion {
}
export declare class AccionAgregar extends Accion {
    figura: Figura;
    constructor(figura: Figura);
}
export declare abstract class Herramienta {
    protected documento: Documento;
    protected pilaDeshacer: PilaDeshacer;
    protected lienzo: Lienzo;
    constructor(documento: Documento, pilaDeshacer: PilaDeshacer, lienzo: Lienzo);
    protected abstract crearFigura(inicio: Punto, fin: Punto): Figura;
    alSoltar(inicio: Punto, fin: Punto): void;
}
//# sourceMappingURL=dominio.d.ts.map