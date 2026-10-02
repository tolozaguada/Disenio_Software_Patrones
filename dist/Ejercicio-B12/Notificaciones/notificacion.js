import { Reserva } from "../Reserva/reserva.js";
export class ServicioNotificacion {
    fabrica;
    constructor(fabrica) {
        this.fabrica = fabrica;
    }
    notificar(reserva, mensaje) {
        const redactor = this.fabrica.crearRedactor();
        const emisor = this.fabrica.crearEmisor();
        const mensajeRedactado = redactor.redactar(mensaje);
        emisor.enviar(mensajeRedactado);
    }
}
class CalendarioInstitucional {
    registrar(reserva) {
        console.log("Reserva registrada en el calendario institucional");
    }
}
//# sourceMappingURL=notificacion.js.map