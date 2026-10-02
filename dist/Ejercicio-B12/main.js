import { AulaComun } from "./Aulas/aula.js";
import { ConfiguracionSistema } from "./Configuracion/configSistema.js";
import { FabricaMail, FabricaMensajeria } from "./Notificaciones/fabricaNotificacion.js";
import { ServicioNotificacion } from "./Notificaciones/notificacion.js";
import { ReservaBuilder } from "./Reserva/reservaBuilder.js";
import { CalendarioInstitucional } from "./Servicios/calendarioInst.js";
import { ServicioReserva } from "./Servicios/servicioReserva.js";
const configuracion = new ConfiguracionSistema(8, 22, "Calendario académico 2026", "servicios@facultad.edu");
const docente = {
    nombre: "Ana",
    apellido: "Gómez",
    email: "ana@facultad.edu"
};
const aula = new AulaComun(true, 30);
const reserva = new ReservaBuilder(configuracion)
    .conDocente(docente)
    .conMateria("Programación II")
    .conAula(aula)
    .conFecha(new Date(2026, 9, 5, 10, 0))
    .conTipo("puntual")
    .build();
const notificadorDocente = new ServicioNotificacion(new FabricaMail());
const notificadorBedelia = new ServicioNotificacion(new FabricaMensajeria());
const calendario = new CalendarioInstitucional();
const servicioReserva = new ServicioReserva(notificadorDocente, notificadorBedelia, calendario);
servicioReserva.confirmar(reserva, "La reserva fue confirmada");
console.log(servicioReserva);
//# sourceMappingURL=main.js.map