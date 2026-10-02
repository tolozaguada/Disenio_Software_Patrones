import { Reserva } from "../Reserva/reserva.js";

export interface Calendario {
    registrar(reserva: Reserva): void;
}

export class CalendarioInstitucional implements Calendario {
    registrar(reserva: Reserva): void {
        console.log("Reserva registrada en el calendario institucional");
    }
}