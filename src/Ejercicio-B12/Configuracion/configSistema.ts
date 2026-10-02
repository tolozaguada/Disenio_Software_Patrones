export class ConfiguracionSistema {
    constructor (
        private horaInicioClases: number,
        private horaFinClases: number,
        private calendarioAcademico: string,
        private direccionServicios: string
    ){}

    estaDentroDelHorario(fecha: Date): boolean {
        const hora = fecha.getHours();
        return hora >= this.horaInicioClases && hora <= this.horaFinClases;
    }
}