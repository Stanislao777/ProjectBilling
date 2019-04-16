class GeneradorBoletas {
    constructor() {

    }

    generarBoleta(empleado) {
        return `Nombre: ${empleado.nombre}\nCi: ${empleado.ci}\nSueldo: ${empleado.obtenerSalario()}`;
    }
}

module.exports = GeneradorBoletas;
