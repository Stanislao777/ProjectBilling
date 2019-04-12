class CalcularSalarioFijo {

    constructor(salario, fechaInicio) {
        this.salario = salario;
        this.fechaInicio = fechaInicio;
    }

    obtenerSalario() {
        let fecha = new Date(this.fechaInicio);
        let fechaActual = new Date();
        if(fechaActual.getMonth() === fecha.getMonth() && fecha.getFullYear() === fechaActual.getFullYear()) {
            let ultimaFechaDelMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);
            let descuento = (ultimaFechaDelMes.getDate() - fecha.getDate()) / ultimaFechaDelMes.getDate();
            return this.salario * descuento;
        }
        if(fecha > fechaActual) {
            return 0;
        }
        return this.salario;
    }
}

module.exports = CalcularSalarioFijo;
