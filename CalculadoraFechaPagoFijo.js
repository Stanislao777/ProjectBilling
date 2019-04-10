class CalculadoraFechaPagoFijo {
    constructor(fechaInicial) {
        this.fechaInicial = fechaInicial;
    }

    reducirDIa(fecha) {
        fecha.setDate(fecha.getDate() - 1);
        return fecha;
    }

    inicioDePago() {
        let ultimaFechaDelMes = new Date(this.fechaInicial.getFullYear(), this.fechaInicial.getMonth() + 1, 0);
        if(ultimaFechaDelMes.getDay() === 0) {
            ultimaFechaDelMes = this.reducirDIa(ultimaFechaDelMes);
        }
        if(ultimaFechaDelMes.getDay() === 6) {
            ultimaFechaDelMes = this.reducirDIa(ultimaFechaDelMes);
        }
        return ultimaFechaDelMes.getDate() + '-' + (ultimaFechaDelMes.getMonth() + 1) + '-' + ultimaFechaDelMes.getFullYear();
    }
}

module.exports = CalculadoraFechaPagoFijo;