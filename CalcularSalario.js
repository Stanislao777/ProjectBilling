import CalcularSalarioHoras from './CalcularSalarioHoras';
import CalcularSalarioFijo from './CalcularSalarioFijo';
import CalcularSalarioComision from './CalcularSalarioComision';

class CalcularSalario {

    constructor(tipo, monto_kardex, sueldos, comision_percentaje, ventas, fechaInicio) {
        if(tipo === 'Horas') {
            this.calcularSalario = new CalcularSalarioHoras(monto_kardex, sueldos);
        }
        if(tipo === 'Fijo') {
            this.calcularSalario = new CalcularSalarioFijo(monto_kardex, fechaInicio);
        }
        if(tipo === 'Comision') {
            this.calcularSalario = new CalcularSalarioComision(monto_kardex, comision_percentaje, ventas);
        }
    }

    obtenerSalario() {
        return this.calcularSalario.obtenerSalario();
    }
}

module.exports = CalcularSalario;
