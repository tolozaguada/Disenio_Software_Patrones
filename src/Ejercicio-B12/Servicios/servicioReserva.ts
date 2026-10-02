import { Reserva } from "../Reserva/reserva.js";
import type { Notificador } from "../Notificaciones/notificacion.js";
import type{ Calendario } from "./calendarioInst.js";

export class ServicioReserva {
    constructor(
        private notificadorDocente: Notificador,
        private notificadorBedelia: Notificador,
        private calendario: Calendario
    ) {}

    confirmar(reserva: Reserva, mensaje: string): void {
        this.notificadorDocente.notificar(reserva, mensaje);
        this.notificadorBedelia.notificar(reserva, mensaje);
        this.calendario.registrar(reserva);
    }
}