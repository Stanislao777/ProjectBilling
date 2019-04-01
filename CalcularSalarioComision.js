class CalcularSalarioComision {

    constructor(monto_kardex, comision_porcentaje, ventas) {
        this.monto_kardex = monto_kardex;
        this.comision_porcentaje = comision_porcentaje;
        this.ventas = ventas;
    }

    obtenerSalario() {
        return this.monto_kardex + this.comision_porcentaje * this.ventas.ObtenerDinero();
    }
}

module.exports = CalcularSalarioComision;
