import { Herramienta } from "./dominio.js";
import { Rectangulo, Elipse, Linea, CuadradoDeTexto, FlechaAcotada } from "./figura.js";
import { Documento, PilaDeshacer, Lienzo } from "./dominio.js";
// Implementaciones de herramientas específicas
class HerramientaRectangulo extends Herramienta {
    crearFigura(inicio, fin) {
        return new Rectangulo(inicio, fin);
    }
}
class HerramientaElipse extends Herramienta {
    crearFigura(inicio, fin) {
        return new Elipse(inicio, fin);
    }
}
class HerramientaLinea extends Herramienta {
    crearFigura(inicio, fin) {
        return new Linea(inicio, fin);
    }
}
class HerramientaCuadradoDeTexto extends Herramienta {
    crearFigura(inicio, fin) {
        return new CuadradoDeTexto(inicio, fin);
    }
}
class HerramientaFlechaAcotada extends Herramienta {
    estiloPunta;
    constructor(documento, pilaDeshacer, lienzo, estiloPunta) {
        super(documento, pilaDeshacer, lienzo);
        this.estiloPunta = estiloPunta;
    }
    crearFigura(inicio, fin) {
        return new FlechaAcotada(inicio, fin);
    }
}
//# sourceMappingURL=herramientas.js.map