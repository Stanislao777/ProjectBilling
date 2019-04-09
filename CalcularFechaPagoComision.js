class CalcularFechaPagoComision {
    constructor(fechaInicial, fechaFinal) {
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
    }

    determinarDisponibilidadDePago() {
        let diferenciaEnDias = (this.fechaFinal - this.fechaInicial) / (86400000);
        let dia = this.fechaFinal.getDay();
        return (diferenciaEnDias > 10) && (dia === 5);
    }
}

module.exports = CalcularFechaPagoComision;