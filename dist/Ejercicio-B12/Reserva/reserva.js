export class Reserva {
    docente;
    materia;
    aula;
    fecha;
    tipo;
    equipamiento;
    observaciones;
    docenteSuplente;
    requiereApertura;
    autorizacionDecanato;
    confirmacionResponsableSistemas;
    constructor(docente, materia, aula, fecha, tipo, equipamiento, observaciones, docenteSuplente, requiereApertura = false, autorizacionDecanato = false, confirmacionResponsableSistemas = false) {
        this.docente = docente;
        this.materia = materia;
        this.aula = aula;
        this.fecha = fecha;
        this.tipo = tipo;
        this.equipamiento = equipamiento;
        this.observaciones = observaciones;
        this.docenteSuplente = docenteSuplente;
        this.requiereApertura = requiereApertura;
        this.autorizacionDecanato = autorizacionDecanato;
        this.confirmacionResponsableSistemas = confirmacionResponsableSistemas;
    }
    getFecha() {
        return new Date(this.fecha.getTime());
    }
    clonar(nuevaFecha) {
        const nuevasObservaciones = [];
        if (this.observaciones) {
            for (const observacion of this.observaciones) {
                nuevasObservaciones.push(observacion);
            }
        }
        return new Reserva(this.docente, this.materia, this.aula, new Date(nuevaFecha.getTime()), this.tipo, this.equipamiento, nuevasObservaciones, this.docenteSuplente, this.requiereApertura, this.autorizacionDecanato, this.confirmacionResponsableSistemas);
    }
}
//# sourceMappingURL=reserva.js.map