import type {
    Docente,
    Materia,
    TipoReserva,
    Equipamiento,
    Observacion
} from "./tipos.js";

import type { Aula } from "../Aulas/aula.js";

export class Reserva {
    constructor (
        private docente: Docente,
        private materia: Materia,
        private aula: Aula,
        private fecha: Date,
        private tipo: TipoReserva,

        private equipamiento?: Equipamiento,
        private observaciones?: Observacion[],
        private docenteSuplente?: Docente,
        private requiereApertura: boolean = false,
        private autorizacionDecanato: boolean = false,
        private confirmacionResponsableSistemas: boolean = false
    ){}

    getFecha(): Date {
        return new Date(this.fecha.getTime());
    }

    clonar(nuevaFecha: Date): Reserva {
        const nuevasObservaciones: Observacion[] = [];

        if (this.observaciones) {
            for (const observacion of this.observaciones ) {
                nuevasObservaciones.push(observacion);
            }
        }
        
        return new Reserva(
            this.docente,
            this.materia,
            this.aula,
            new Date(nuevaFecha.getTime()),
            this.tipo,
            this.equipamiento,
            nuevasObservaciones,
            this.docenteSuplente,
            this.requiereApertura,
            this.autorizacionDecanato,
            this.confirmacionResponsableSistemas
        );
    }
}