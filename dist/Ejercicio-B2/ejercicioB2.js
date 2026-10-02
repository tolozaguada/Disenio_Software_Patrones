class Turno {
    paciente;
    profesional;
    fecha;
    hora;
    constructor(paciente, profesional, fecha, hora) {
        this.paciente = paciente;
        this.profesional = profesional;
        this.fecha = fecha;
        this.hora = hora;
    }
}
// Se instancia directamente en la raíz de composición.
const Turno1 = new Turno({ nombre: "Juan", apellido: "Perez", dni: "12345678" }, { nombre: "María", apellido: "Gómez", matricula: "98765432" }, new Date(), "10:00");
console.log(Turno1); // Se muesta: Turno { paciente: ..., profesional: ..., fecha: ..., hora: ... }
// Resolución de la propuesta 3
// CalendarioDeFeriados no es un singleton, sino una clase común y corriente.
class CalendarioDeFeriados {
    esFeriado(fecha) {
        /* ... */
        return false;
    }
}
// Las clases que lo necesiten lo declaran en su constructor.
class AsignadorDeTurnos {
    calendario;
    constructor(calendario) {
        this.calendario = calendario;
    }
}
// Se instancia una sola vez en la raíz de composición y 
// se inyecta por constructor a las clases que lo necesiten.
const calendario = new CalendarioDeFeriados();
const asignador = new AsignadorDeTurnos(calendario);
class Paciente {
    datos;
    constructor(datos) {
        this.datos = datos;
    }
}
// Se instancia directamente en la raíz de composición.
const paciente1 = new Paciente({
    nombre: "Juan Perez",
    documento: "12345678",
    fechaNacimiento: new Date("1990-01-01"),
    obraSocial: "Obra Social XYZ"
});
console.log(paciente1); // Se muestra: Paciente { datos: ... }
export {};
//# sourceMappingURL=ejercicioB2.js.map