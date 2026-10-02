//Implentación básica de clases para la compilación del código, 
// no se implementan métodos ni propiedades específicas.
export class Documento {
    agregar(figura) { }
    seleccionar(figura) { }
}
export class PilaDeshacer {
    registrar(accion) { }
}
export class Lienzo {
    repintar() { }
}
export class Accion {
}
export class AccionAgregar extends Accion {
    figura;
    constructor(figura) {
        super();
        this.figura = figura;
    }
}
// Clase abstracta Herramienta
export class Herramienta {
    documento;
    pilaDeshacer;
    lienzo;
    // Las dependencias compartidas se inyectan desde fuera, evitando crear
    // instancias distintas por cada herramienta y facilitando las pruebas.
    constructor(documento, pilaDeshacer, lienzo) {
        this.documento = documento;
        this.pilaDeshacer = pilaDeshacer;
        this.lienzo = lienzo;
    }
    // Ahora el método alSoltar es genérico y puede ser utilizado por cualquier herramienta que herede de Herramienta
    alSoltar(inicio, fin) {
        const figura = this.crearFigura(inicio, fin);
        this.documento.agregar(figura);
        this.documento.seleccionar(figura);
        this.pilaDeshacer.registrar(new AccionAgregar(figura));
        this.lienzo.repintar();
    }
}
//# sourceMappingURL=dominio.js.map