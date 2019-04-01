class Empleados {

    constructor(nombre, tipo, monto_kardex, sueldos, comision_percentaje, ventas) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.montoKardex = monto_kardex;
        this.sueldos = sueldos;
        this.comisionPorcentaje = comision_percentaje;
        this.ventas = ventas;
    }

    obtenerNombre() {
        return this.nombre;
    }

    obtenerTipo() {
        return this.tipo;
    }

    obtenerSalario() {
        if(this.tipo === 'Horas') {
            return this.montoKardex * this.sueldos.getHours();
        }
        if(this.tipo === 'Fijo') {
            return this.montoKardex;
        }
        if(this.tipo === 'Comision') {
            return this.montoKardex + this.comisionPorcentaje * this.ventas.ObtenerDinero();
        }
        throw new Error('Empleado no especificado');
    }
}

module.exports = Empleados;
