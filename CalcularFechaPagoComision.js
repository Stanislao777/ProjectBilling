class CalcularFechaPagoComision {
    constructor(fechaInicial) {
        this.fechaInicial = fechaInicial;
    }

    agregarSemanaHastaViernes(fecha, cantidadDeSemanas) {
        for(let index = 0; index < cantidadDeSemanas; ++index) {
            do {
                fecha.setDate(fecha.getDate() + 1);
            }while(fecha.getDay() != 5);
        }
        return fecha;
    }

    inicioDePago() {
        let ultimoFechaDeLaSemana = new Date(this.fechaInicial.getFullYear(), this.fechaInicial.getMonth(), this.fechaInicial.getDate());
        ultimoFechaDeLaSemana = this.agregarSemanaHastaViernes(ultimoFechaDeLaSemana, 2);
        return ultimoFechaDeLaSemana.getDate() + '-' + (ultimoFechaDeLaSemana.getMonth() + 1) + '-' + ultimoFechaDeLaSemana.getFullYear();
    }
}

module.exports = CalcularFechaPagoComision;