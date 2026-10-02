import type { Docente, Materia, TipoReserva, Equipamiento, Observacion } from "./tipos.js";
import { Reserva } from "./reserva.js";
import type { Aula } from "../Aulas/aula.js";
import { ConfiguracionSistema } from "../Configuracion/configSistema.js";
export declare class ReservaBuilder {
    private configuracionSistema;
    private docente?;
    private materia?;
    private aula?;
    private fecha?;
    private tipo?;
    private equipamiento?;
    private observaciones?;
    private docenteSuplente?;
    private requiereApertura;
    private autorizacionDecanato;
    private confirmacionResponsableSistemas;
    constructor(configuracionSistema: ConfiguracionSistema);
    conDocente(docente: Docente): ReservaBuilder;
    conMateria(materia: Materia): ReservaBuilder;
    conAula(aula: Aula): ReservaBuilder;
    conFecha(fecha: Date): ReservaBuilder;
    conTipo(tipo: TipoReserva): ReservaBuilder;
    conEquipamiento(equipamiento: Equipamiento): ReservaBuilder;
    conObservaciones(observaciones: Observacion[]): ReservaBuilder;
    conDocenteSuplente(docenteSuplente: Docente): ReservaBuilder;
    conApertura(requiereApertura: boolean): ReservaBuilder;
    conAutorizacionDecanato(autorizacion: boolean): ReservaBuilder;
    conConfirmacionResponsableSistemas(confirmacion: boolean): ReservaBuilder;
    build(): Reserva;
}
//# sourceMappingURL=reservaBuilder.d.ts.map