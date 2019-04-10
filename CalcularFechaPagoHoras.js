class CalcularFechaPagoHoras {
    constructor(fecha) {
        this.fecha = fecha;
    }

    inicioDePago() {
        let ultimoFechaDeLaSemana = new Date(this.fecha.getFullYear(), this.fecha.getMonth(), this.fecha.getDate());
        while(ultimoFechaDeLaSemana.getDay() != 5) {
            ultimoFechaDeLaSemana.setDate(ultimoFechaDeLaSemana.getDate() + 1);
        }
        return ultimoFechaDeLaSemana.getDate() + '-' + (ultimoFechaDeLaSemana.getMonth() + 1) + '-' + ultimoFechaDeLaSemana.getFullYear();
        //return this.fecha.getDay() === 5;
    }
}

module.exports = CalcularFechaPagoHoras;