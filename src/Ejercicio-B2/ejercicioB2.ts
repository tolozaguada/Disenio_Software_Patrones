// Resolución de la propuesta 1
// Para modelos de dominio extensibles, interface expresa mejor el contrato.
interface DatosPaciente {
    nombre: string,
    apellido: string,
    dni: string
}

interface Profesional {
    nombre: string,
    apellido: string,
    matricula: string
}

class Turno {
    constructor (
        public readonly paciente: DatosPaciente,
        public readonly profesional: Profesional,
        public readonly fecha: Date,
        public readonly hora: string
    ) {}
}

// Se instancia directamente en la raíz de composición.
const Turno1 = new Turno(
    { nombre: "Juan", apellido: "Perez", dni: "12345678" },
    { nombre: "María", apellido: "Gómez", matricula: "98765432" },
    new Date(),
    "10:00"
);

console.log(Turno1); // Se muesta: Turno { paciente: ..., profesional: ..., fecha: ..., hora: ... }


// Resolución de la propuesta 3

// CalendarioDeFeriados no es un singleton, sino una clase común y corriente.
class CalendarioDeFeriados {
    esFeriado(fecha: Date): boolean {
        /* ... */
        return false;
    }
}

// Las clases que lo necesiten lo declaran en su constructor.
class AsignadorDeTurnos {
    constructor(private readonly calendario: CalendarioDeFeriados) {}
}

// Se instancia una sola vez en la raíz de composición y 
// se inyecta por constructor a las clases que lo necesiten.
const calendario = new CalendarioDeFeriados();
const asignador = new AsignadorDeTurnos(calendario);


// Resolución de la propuesta 4
interface datosPaciente {
    nombre: string,
    documento: string,
    fechaNacimiento: Date,
    obraSocial: string | null
}

class Paciente {
    constructor(public readonly datos: datosPaciente) {}
}

// Se instancia directamente en la raíz de composición.
const paciente1 = new Paciente({
    nombre: "Juan Perez",
    documento: "12345678",
    fechaNacimiento: new Date("1990-01-01"),
    obraSocial: "Obra Social XYZ"
});
console.log(paciente1); // Se muestra: Paciente { datos: ... }