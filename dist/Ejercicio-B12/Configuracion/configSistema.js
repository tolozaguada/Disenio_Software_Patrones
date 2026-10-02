export class ConfiguracionSistema {
    horaInicioClases;
    horaFinClases;
    calendarioAcademico;
    direccionServicios;
    constructor(horaInicioClases, horaFinClases, calendarioAcademico, direccionServicios) {
        this.horaInicioClases = horaInicioClases;
        this.horaFinClases = horaFinClases;
        this.calendarioAcademico = calendarioAcademico;
        this.direccionServicios = direccionServicios;
    }
    estaDentroDelHorario(fecha) {
        const hora = fecha.getHours();
        return hora >= this.horaInicioClases && hora <= this.horaFinClases;
    }
}
//# sourceMappingURL=configSistema.js.map