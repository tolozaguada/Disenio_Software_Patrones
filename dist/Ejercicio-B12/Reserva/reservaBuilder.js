import { Reserva } from "./reserva.js";
import { AulaMagna, LaboratorioInformatica } from "../Aulas/aula.js";
import { ConfiguracionSistema } from "../Configuracion/configSistema.js";
export class ReservaBuilder {
    configuracionSistema;
    docente;
    materia;
    aula;
    fecha;
    tipo;
    equipamiento;
    observaciones;
    docenteSuplente;
    requiereApertura = false;
    autorizacionDecanato = false;
    confirmacionResponsableSistemas = false;
    constructor(configuracionSistema) {
        this.configuracionSistema = configuracionSistema;
    }
    conDocente(docente) {
        this.docente = docente;
        return this;
    }
    conMateria(materia) {
        this.materia = materia;
        return this;
    }
    conAula(aula) {
        this.aula = aula;
        return this;
    }
    conFecha(fecha) {
        this.fecha = fecha;
        return this;
    }
    conTipo(tipo) {
        this.tipo = tipo;
        return this;
    }
    conEquipamiento(equipamiento) {
        this.equipamiento = equipamiento;
        return this;
    }
    conObservaciones(observaciones) {
        this.observaciones = observaciones;
        return this;
    }
    conDocenteSuplente(docenteSuplente) {
        this.docenteSuplente = docenteSuplente;
        return this;
    }
    conApertura(requiereApertura) {
        this.requiereApertura = requiereApertura;
        return this;
    }
    conAutorizacionDecanato(autorizacion) {
        this.autorizacionDecanato = autorizacion;
        return this;
    }
    conConfirmacionResponsableSistemas(confirmacion) {
        this.confirmacionResponsableSistemas = confirmacion;
        return this;
    }
    build() {
        if (!this.docente || !this.materia || !this.aula || !this.fecha || !this.tipo) {
            throw new Error("Faltan campos obligatorios para completar la reserva");
        }
        if (this.tipo === "repetida" && this.requiereApertura === true) {
            throw new Error("Una reserva repetida no puede pedir una apertura anticipada");
        }
        if (this.aula instanceof AulaMagna) {
            if (!this.configuracionSistema.estaDentroDelHorario(this.fecha) && !this.autorizacionDecanato) {
                throw new Error("El Aula Magna fuera del horario de clases requiere autorización de Decanato");
            }
        }
        if (this.aula instanceof LaboratorioInformatica) {
            if (!this.confirmacionResponsableSistemas) {
                throw new Error("El responsable de sistemas no aprobó la reserva");
            }
        }
        return new Reserva(this.docente, this.materia, this.aula, this.fecha, this.tipo, this.equipamiento, this.observaciones, this.docenteSuplente, this.requiereApertura, this.autorizacionDecanato, this.confirmacionResponsableSistemas);
    }
}
//# sourceMappingURL=reservaBuilder.js.map