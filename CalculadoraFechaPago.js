"

class CalculadoraFechaPago {
    constructor(tipo, fechaInicial, fechaFinal){
        if (tipo==='Horas') {
            this.calcularFechaPago = new CalculadoraFechaPago(fechaInicial);
        }
        if (tipo === "Comision"){
            this.calcularFechaPago = new CalculadoraFechaPagoComision(fechaInicial, fechaFinal);
        }
    }

    estaDisponibleParaPagar(){
        return this.calcularFechaPago.determinarDisponibilidadDePago();
    }

}

module.exports = CalculadoraFechaPago;
