import type {Figura, Punto} from "./figura.js";

//Implentación básica de clases para la compilación del código, 
// no se implementan métodos ni propiedades específicas.
export class Documento {
    agregar(figura: Figura): void {}
    seleccionar(figura: Figura): void {}
}

export class PilaDeshacer {
    registrar(accion: Accion): void {}
}

export class Lienzo {
    repintar(): void {}
}

export class Accion {}
export class AccionAgregar extends Accion {
    constructor(public figura: Figura) {
        super();
    }
}

// Clase abstracta Herramienta
export abstract class Herramienta {
    protected documento: Documento;
    protected pilaDeshacer: PilaDeshacer;
    protected lienzo: Lienzo;

    // Las dependencias compartidas se inyectan desde fuera, evitando crear
    // instancias distintas por cada herramienta y facilitando las pruebas.
    constructor(
        documento: Documento,
        pilaDeshacer: PilaDeshacer,
        lienzo: Lienzo
    ) {
        this.documento = documento;
        this.pilaDeshacer = pilaDeshacer;
        this.lienzo = lienzo;
    }

    protected abstract crearFigura(
        inicio: Punto,
        fin: Punto
    ): Figura;

     // Ahora el método alSoltar es genérico y puede ser utilizado por cualquier herramienta que herede de Herramienta
    alSoltar(inicio:Punto, fin:Punto): void {
        const figura = this.crearFigura(inicio, fin);

        this.documento.agregar(figura);
        this.documento.seleccionar(figura);
        this.pilaDeshacer.registrar(new AccionAgregar(figura));
        this.lienzo.repintar();

    }
}




