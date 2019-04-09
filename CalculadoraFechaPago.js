import CalculadoraFechaPagoHoras from "../ProjectBilling-Pruebas-Mocha/CalcularFechaPagoHoras";
import CalculadoraFechaPagoComision from "../ProjectBilling-Pruebas-Mocha/CalcularFechaPagoComision";
import CalculadoraFechaPagoFijo from "../ProjectBilling-Pruebas-Mocha/CalculadoraFechaPagoFijo"

class CalculadoraFechaPago {
    constructor(tipo, fechaInicial, fechaFinal) {
        if (tipo === "Horas") {
            this.calcularFechaPago = new CalculadoraFechaPagoHoras(fechaInicial);
        }
        if (tipo === "Comision") {
            this.calcularFechaPago = new CalculadoraFechaPagoComision(fechaInicial, fechaFinal);
        }
        if (tipo === "Fijo") {
            this.calcularFechaPago = new CalculadoraFechaPagoFijo(fechaInicial, fechaFinal);
        }
    }

    estaDisponibleParaPagar() {
        return this.calcularFechaPago.determinarDisponibilidadDePago();
    }
}

module.exports = CalculadoraFechaPago;
