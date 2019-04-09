class CalcularFechaPagoHoras {
    constructor(fecha) {
        this.fecha = fecha;
    }

    determinarDisponibilidadDePago() {
        return this.fecha.getDay() === 5;
    }
}

module.exports = CalcularFechaPagoHoras;