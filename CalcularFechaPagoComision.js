class CalcularFechaPagoComision {
    constructor(fechaInicial, fechaFinal) {
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
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
        //let diferenciaEnDias = (this.fechaFinal - this.fechaInicial) / (86400000);
        //let dia = this.fechaFinal.getDay();
        //return (diferenciaEnDias > 10) && (dia ===
        let ultimoFechaDeLaSemana = new Date(this.fechaInicial.getFullYear(), this.fechaInicial.getMonth(), this.fechaInicial.getDate());
        ultimoFechaDeLaSemana = this.agregarSemanaHastaViernes(ultimoFechaDeLaSemana, 2);
        return ultimoFechaDeLaSemana.getDate() + '-' + (ultimoFechaDeLaSemana.getMonth() + 1) + '-' + ultimoFechaDeLaSemana.getFullYear();
    }
}

module.exports = CalcularFechaPagoComision;