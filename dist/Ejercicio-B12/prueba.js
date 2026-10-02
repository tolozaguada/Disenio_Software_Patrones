import { Reserva } from "./Reserva/reserva.js";
import { ReservaBuilder } from "./Reserva/reservaBuilder.js";
import { AulaComun, AulaMagna, LaboratorioInformatica } from "./Aulas/aula.js";
import { ConfiguracionSistema } from "./Configuracion/configSistema.js";
import { ServicioReserva } from "./Servicios/servicioReserva.js";
// ==================================================
// CONFIGURACIÓN
// ==================================================
const configuracion = new ConfiguracionSistema(8, 22, "Calendario académico 2026", "servicios@facultad.edu");
const docente = {
    nombre: "Ana",
    apellido: "Gómez",
    email: "ana@facultad.edu"
};
// ==================================================
// PRUEBA 1: RESERVA VÁLIDA
// ==================================================
console.log("--- PRUEBA 1: Reserva válida ---");
try {
    const reserva = new ReservaBuilder(configuracion)
        .conDocente(docente)
        .conMateria("Programación II")
        .conAula(new AulaComun(true, 30))
        .conFecha(new Date(2026, 9, 5, 10, 0))
        .conTipo("puntual")
        .build();
    console.log("La reserva se creó correctamente");
}
catch (error) {
    console.log("La reserva no debería haber sido rechazada");
}
// ==================================================
// PRUEBA 2: RESERVA REPETIDA + APERTURA ANTICIPADA
// ==================================================
console.log("--- PRUEBA 2: Reserva repetida con apertura anticipada ---");
try {
    new ReservaBuilder(configuracion)
        .conDocente(docente)
        .conMateria("Programación II")
        .conAula(new AulaComun(true, 30))
        .conFecha(new Date(2026, 9, 5, 10, 0))
        .conTipo("repetida")
        .conApertura(true)
        .build();
    console.log("La reserva debería haber sido rechazada");
}
catch (error) {
    console.log("La reserva fue rechazada correctamente");
}
// ==================================================
// PRUEBA 3: AULA MAGNA FUERA DE HORARIO
// ==================================================
console.log("--- PRUEBA 3: Aula Magna fuera de horario sin autorización ---");
try {
    new ReservaBuilder(configuracion)
        .conDocente(docente)
        .conMateria("Programación II")
        .conAula(new AulaMagna(true, 200))
        .conFecha(new Date(2026, 9, 5, 23, 0))
        .conTipo("puntual")
        .build();
    console.log("La reserva debería haber sido rechazada");
}
catch (error) {
    console.log("La reserva fue rechazada correctamente");
}
// ==================================================
// PRUEBA 4: LABORATORIO SIN CONFIRMACIÓN DE SISTEMAS
// ==================================================
console.log("--- PRUEBA 4: Laboratorio sin confirmación ---");
try {
    new ReservaBuilder(configuracion)
        .conDocente(docente)
        .conMateria("Programación II")
        .conAula(new LaboratorioInformatica(true, 30))
        .conFecha(new Date(2026, 9, 5, 10, 0))
        .conTipo("puntual")
        .build();
    console.log("La reserva debería haber sido rechazada");
}
catch (error) {
    console.log("La reserva fue rechazada correctamente");
}
// ==================================================
// PRUEBA 5: PROTOTYPE
// Duplicar una reserva cambiando solamente la fecha
// ==================================================
console.log("--- PRUEBA 5: Duplicar reserva ---");
const fechaOriginal = new Date(2026, 9, 5, 10, 0);
const reservaOriginal = new ReservaBuilder(configuracion)
    .conDocente(docente)
    .conMateria("Programación II")
    .conAula(new AulaComun(true, 30))
    .conFecha(fechaOriginal)
    .conTipo("puntual")
    .build();
const nuevaFecha = new Date(2026, 10, 5, 10, 0);
const reservaDuplicada = reservaOriginal.clonar(nuevaFecha);
if (reservaOriginal.getFecha().getTime() !==
    reservaDuplicada.getFecha().getTime()) {
    console.log("La reserva duplicada tiene una fecha diferente");
    console.log("La reserva original no fue modificada");
}
else {
    console.log("La reserva original y la duplicada tienen la misma fecha");
}
// ==================================================
// PRUEBA 6: CONFIRMACIÓN
// Sustituimos las dependencias reales
// ==================================================
console.log("--- PRUEBA 6: Confirmación de reserva ---");
const reservaParaConfirmar = new ReservaBuilder(configuracion)
    .conDocente(docente)
    .conMateria("Programación II")
    .conAula(new AulaComun(true, 30))
    .conFecha(new Date(2026, 9, 5, 10, 0))
    .conTipo("puntual")
    .build();
// Variables para comprobar qué ocurrió
let notificoDocente = false;
let notificoBedelia = false;
let registroCalendario = false;
// Notificador sustituido para el docente
const notificadorDocente = {
    notificar(reserva, mensaje) {
        notificoDocente = true;
        console.log("Se notificó al docente");
    }
};
// Notificador sustituido para bedelía
const notificadorBedelia = {
    notificar(reserva, mensaje) {
        notificoBedelia = true;
        console.log("Se notificó a bedelía");
    }
};
// Calendario sustituido
const calendario = {
    registrar(reserva) {
        registroCalendario = true;
        console.log("Se registró la reserva en el calendario");
    }
};
// Creamos el servicio utilizando las dependencias sustituidas
const servicioReserva = new ServicioReserva(notificadorDocente, notificadorBedelia, calendario);
// Confirmamos la reserva
servicioReserva.confirmar(reservaParaConfirmar, "La reserva fue confirmada");
// ==================================================
// RESULTADO DE LA PRUEBA DE CONFIRMACIÓN
// ==================================================
console.log("--- RESULTADOS DE LA PRUEBA 6 ---");
if (notificoDocente) {
    console.log("Se notificó al docente");
}
else {
    console.log("La reserva NO notificó al docente");
}
if (notificoBedelia) {
    console.log("Se notificó a bedelía");
}
else {
    console.log("La reserva NO notificó a bedelía");
}
if (registroCalendario) {
    console.log("La reserva se registró en el calendario");
}
else {
    console.log("La reserva NO se registró en el calendario");
}
//# sourceMappingURL=prueba.js.map