class CalculadoraFechaPagoFijo {
    constructor(fechaInicial, fechaFinal) {
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
    }

    inicioDePago() {
        let diferenciaEnDias = (this.fechaFinal - this.fechaInicial) / (86400000);
        let ultimaFechaDelMes = new Date(this.fechaFinal.getFullYear(), this.fechaFinal.getMonth() + 1, 0);
        /*if (ultimaFechaDelMes.getDate() !== this.fechaFinal.getDate()) {
            return false;
        }*/
        if(ultimaFechaDelMes.getDay() === 0) {
            ultimaFechaDelMes.setDate(ultimaFechaDelMes.getDate() - 1);
        }
        if(ultimaFechaDelMes.getDay() === 6) {
            ultimaFechaDelMes.setDate(ultimaFechaDelMes.getDate() - 1);
        }
        return ultimaFechaDelMes.getDate() + '-' + (ultimaFechaDelMes.getMonth() + 1) + '-' + ultimaFechaDelMes.getFullYear();
        //let ultimoDia = ultimaFechaDelMes.getDay();
        //return (ultimoDia > 0 && ultimoDia < 6) && (diferenciaEnDias > 5);
    }
}

module.exports = CalculadoraFechaPagoFijo;