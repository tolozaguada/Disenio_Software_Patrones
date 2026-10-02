import type{
    Docente,
    Materia,
    TipoReserva,
    Equipamiento,
    Observacion
} from "./tipos.js";
import {Reserva} from "./reserva.js";
import type {Aula} from "../Aulas/aula.js";
import {AulaMagna, LaboratorioInformatica} from "../Aulas/aula.js";
import {ConfiguracionSistema} from "../Configuracion/configSistema.js";

export class ReservaBuilder {
    private docente?: Docente;
    private materia?: Materia;
    private aula?: Aula;
    private fecha?: Date;
    private tipo?: TipoReserva;

    private equipamiento?: Equipamiento;
    private observaciones?: Observacion[];
    private docenteSuplente?: Docente;
    private requiereApertura: boolean = false;
    private autorizacionDecanato: boolean = false;
    private confirmacionResponsableSistemas: boolean = false;

    constructor(private configuracionSistema: ConfiguracionSistema) {}


    conDocente(docente: Docente): ReservaBuilder{
        this.docente = docente;
        return this
    }

    conMateria(materia: Materia): ReservaBuilder{
        this.materia = materia;
        return this
    }

    conAula(aula: Aula): ReservaBuilder{
        this.aula = aula;
        return this
    }

    conFecha(fecha: Date): ReservaBuilder {
        this.fecha = fecha;
        return this
    }

    conTipo(tipo: TipoReserva): ReservaBuilder {
        this.tipo = tipo;
        return this
    }

    conEquipamiento(equipamiento: Equipamiento): ReservaBuilder {
        this.equipamiento = equipamiento;
        return this;
    }

    conObservaciones(observaciones: Observacion[]): ReservaBuilder {
        this.observaciones = observaciones;
        return this;
    }

    conDocenteSuplente(docenteSuplente: Docente): ReservaBuilder {
        this.docenteSuplente = docenteSuplente;
        return this;
    }

    conApertura(requiereApertura: boolean): ReservaBuilder {
        this.requiereApertura = requiereApertura;
        return this;
    }

    conAutorizacionDecanato(autorizacion: boolean): ReservaBuilder {
        this.autorizacionDecanato = autorizacion;
        return this;
    }

    conConfirmacionResponsableSistemas(confirmacion: boolean): ReservaBuilder {
        this.confirmacionResponsableSistemas = confirmacion;
        return this;
    }


    build(): Reserva{
        if(!this.docente || !this.materia || !this.aula || !this.fecha || !this.tipo){
            throw new Error ("Faltan campos obligatorios para completar la reserva")
        }

        if(this.tipo === "repetida" && this.requiereApertura === true){
            throw new Error ("Una reserva repetida no puede pedir una apertura anticipada");
        }

        if(this.aula instanceof AulaMagna ){
            if (!this.configuracionSistema.estaDentroDelHorario(this.fecha!) && !this.autorizacionDecanato){
                throw new Error ("El Aula Magna fuera del horario de clases requiere autorización de Decanato")
            }
        }

        if(this.aula instanceof LaboratorioInformatica){
            if(!this.confirmacionResponsableSistemas){
                throw new Error ("El responsable de sistemas no aprobó la reserva")
            }
        }

        return new Reserva(
            this.docente,
            this.materia,
            this.aula,
            this.fecha,
            this.tipo,
            this.equipamiento,
            this.observaciones,
            this.docenteSuplente,
            this.requiereApertura,
            this.autorizacionDecanato,
            this.confirmacionResponsableSistemas
        )
    }
}