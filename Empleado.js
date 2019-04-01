class Empleado {

    constructor(nombre, ci, calcularSalario) {
        this.nombre = nombre;
        this.ci = ci;
        this.calcularSalario = calcularSalario;
    }

    obtenerNombre() {
        return this.nombre;
    }

    obtenerCi() {
        return this.ci;
    }

    obtenerSalario() {
        return this.calcularSalario.obtenerSalario();
    }

}

module.exports = Empleado;