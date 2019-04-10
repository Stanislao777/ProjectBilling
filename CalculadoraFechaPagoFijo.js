class CalculadoraFechaPagoFijo {
    constructor(fechaInicial) {
        this.fechaInicial = fechaInicial;
    }

    inicioDePago() {
        let ultimaFechaDelMes = new Date(this.fechaInicial.getFullYear(), this.fechaInicial.getMonth() + 1, 0);
        if(ultimaFechaDelMes.getDay() === 0) {
            ultimaFechaDelMes.setDate(ultimaFechaDelMes.getDate() - 1);
        }
        if(ultimaFechaDelMes.getDay() === 6) {
            ultimaFechaDelMes.setDate(ultimaFechaDelMes.getDate() - 1);
        }
        return ultimaFechaDelMes.getDate() + '-' + (ultimaFechaDelMes.getMonth() + 1) + '-' + ultimaFechaDelMes.getFullYear();
    }
}

module.exports = CalculadoraFechaPagoFijo;