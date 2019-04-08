class CalculadoraFechaPago {
    constructor(tipo, fecha){
        if (tipo==='Horas') {
            this.fecha = fecha;
        }

    }

    estaDisponibleParaPagar(){
        return this.fecha.getDay()===5;
    }

}

module.exports = CalculadoraFechaPago;
