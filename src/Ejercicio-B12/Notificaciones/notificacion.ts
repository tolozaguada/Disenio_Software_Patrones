import {Reserva} from "../Reserva/reserva.js"
import type {FabricaNotificacion} from "./fabricaNotificacion.js"

export interface Notificador {
    notificar (reserva: Reserva, mensaje: string): void
}

export class ServicioNotificacion implements Notificador{
    constructor(private fabrica: FabricaNotificacion){}

    notificar(reserva: Reserva, mensaje: string): void {
        const redactor = this.fabrica.crearRedactor();
        const emisor = this.fabrica.crearEmisor();

        const mensajeRedactado = redactor.redactar(mensaje);
        emisor.enviar(mensajeRedactado);
    }
}



class CalendarioInstitucional {
    registrar(reserva: Reserva): void {
        console.log("Reserva registrada en el calendario institucional");
    }
}

