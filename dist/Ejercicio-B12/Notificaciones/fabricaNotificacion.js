import { RedactorMail, RedactorMensajeria, EmisorMail, EmisorMensajeria } from "./producto.js";
export class FabricaMail {
    crearRedactor() {
        return new RedactorMail();
    }
    crearEmisor() {
        return new EmisorMail();
    }
}
export class FabricaMensajeria {
    crearRedactor() {
        return new RedactorMensajeria();
    }
    crearEmisor() {
        return new EmisorMensajeria();
    }
}
//# sourceMappingURL=fabricaNotificacion.js.map