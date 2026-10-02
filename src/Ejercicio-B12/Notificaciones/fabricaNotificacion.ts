import type{Redactor, Emisor} from "./producto.js"
import {
    RedactorMail,
    RedactorMensajeria,
    EmisorMail,
    EmisorMensajeria
} from "./producto.js"

export interface FabricaNotificacion {
    crearRedactor(): Redactor;

    crearEmisor(): Emisor;
}


export class FabricaMail implements FabricaNotificacion{
    crearRedactor(): Redactor {
        return new RedactorMail();
    }

    crearEmisor(): Emisor {
        return new EmisorMail();
    }
}

export class FabricaMensajeria implements FabricaNotificacion{
    crearRedactor(): Redactor {
        return new RedactorMensajeria();
    }

    crearEmisor(): Emisor {
        return new EmisorMensajeria();
    }
}