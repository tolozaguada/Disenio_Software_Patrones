import type { Docente, Materia, TipoReserva, Equipamiento, Observacion } from "./tipos.js";
import type { Aula } from "../Aulas/aula.js";
export declare class Reserva {
    private docente;
    private materia;
    private aula;
    private fecha;
    private tipo;
    private equipamiento?;
    private observaciones?;
    private docenteSuplente?;
    private requiereApertura;
    private autorizacionDecanato;
    private confirmacionResponsableSistemas;
    constructor(docente: Docente, materia: Materia, aula: Aula, fecha: Date, tipo: TipoReserva, equipamiento?: Equipamiento | undefined, observaciones?: Observacion[] | undefined, docenteSuplente?: Docente | undefined, requiereApertura?: boolean, autorizacionDecanato?: boolean, confirmacionResponsableSistemas?: boolean);
    getFecha(): Date;
    clonar(nuevaFecha: Date): Reserva;
}
//# sourceMappingURL=reserva.d.ts.map