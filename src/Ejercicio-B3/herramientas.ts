import {Herramienta} from "./dominio.js";
import type{Punto} from "./figura.js";
import {
    Rectangulo,
    Elipse,
    Linea,
    CuadradoDeTexto,
    FlechaAcotada
} from "./figura.js";
import type {Figura} from "./figura.js";
import {Documento, PilaDeshacer, Lienzo} from "./dominio.js";

// Implementaciones de herramientas específicas
class HerramientaRectangulo extends Herramienta {
    protected crearFigura(inicio: Punto, fin: Punto): Figura {
        return new Rectangulo(inicio, fin);
    }
}

class HerramientaElipse extends Herramienta {
    protected crearFigura(inicio: Punto, fin: Punto): Figura {
        return new Elipse(inicio, fin);
    }
}

class HerramientaLinea extends Herramienta {
    protected crearFigura(inicio: Punto, fin: Punto): Figura {
        return new Linea(inicio, fin);
    }
}

class HerramientaCuadradoDeTexto extends Herramienta {
    protected crearFigura(inicio: Punto, fin: Punto): Figura {
        
        return new CuadradoDeTexto(inicio, fin);
    }
}

class HerramientaFlechaAcotada extends Herramienta {
    constructor(
        documento: Documento,
        pilaDeshacer: PilaDeshacer,
        lienzo: Lienzo,
        public estiloPunta: string
    ) {
        super(documento, pilaDeshacer, lienzo);
    }
    protected crearFigura(inicio: Punto, fin: Punto): Figura {
        return new FlechaAcotada(inicio, fin);
    }
}