import { Reserva } from "../Reserva/reserva.js";
import type { Notificador } from "../Notificaciones/notificacion.js";
import type { Calendario } from "./calendarioInst.js";
export declare class ServicioReserva {
    private notificadorDocente;
    private notificadorBedelia;
    private calendario;
    constructor(notificadorDocente: Notificador, notificadorBedelia: Notificador, calendario: Calendario);
    confirmar(reserva: Reserva, mensaje: string): void;
}
//# sourceMappingURL=servicioReserva.d.ts.map