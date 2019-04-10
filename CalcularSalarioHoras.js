class CalcularSalarioHoras {

    constructor(salario_por_hora, horarios) {
        this.salario_por_hora = salario_por_hora;
        this.horarios = horarios;
    }

    obtenerSalario() {
        return this.salario_por_hora*(this.horarios.obtenerHoras() + this.horarios.obtenerHorasExtra() * 1.5);
    }
}

module.exports = CalcularSalarioHoras;
