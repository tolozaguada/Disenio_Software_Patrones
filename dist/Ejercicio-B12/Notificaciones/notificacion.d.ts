import { Reserva } from "../Reserva/reserva.js";
import type { FabricaNotificacion } from "./fabricaNotificacion.js";
export interface Notificador {
    notificar(reserva: Reserva, mensaje: string): void;
}
export declare class ServicioNotificacion implements Notificador {
    private fabrica;
    constructor(fabrica: FabricaNotificacion);
    notificar(reserva: Reserva, mensaje: string): void;
}
//# sourceMappingURL=notificacion.d.ts.map