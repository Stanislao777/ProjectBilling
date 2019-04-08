class CalcularSalarioHoras {

    constructor(salario_por_hora, horarios) {
        this.salario_por_hora = salario_por_hora;
        this.horarios = horarios;
    }

    obtenerSalario() {
        return this.salario_por_hora * this.horarios.obtenerHoras();
    }
}

module.exports = CalcularSalarioHoras;
