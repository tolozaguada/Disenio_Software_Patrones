import { Reserva } from "../Reserva/reserva.js";
export class ServicioReserva {
    notificadorDocente;
    notificadorBedelia;
    calendario;
    constructor(notificadorDocente, notificadorBedelia, calendario) {
        this.notificadorDocente = notificadorDocente;
        this.notificadorBedelia = notificadorBedelia;
        this.calendario = calendario;
    }
    confirmar(reserva, mensaje) {
        this.notificadorDocente.notificar(reserva, mensaje);
        this.notificadorBedelia.notificar(reserva, mensaje);
        this.calendario.registrar(reserva);
    }
}
//# sourceMappingURL=servicioReserva.js.map