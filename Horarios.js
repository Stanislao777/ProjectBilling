class Horarios {

    constructor(schedulesTimes) {
        this.schedulesTimes = [];
        schedulesTimes.forEach(schedule => {
            this.schedulesTimes.push([new Date(schedule[1]), new Date(schedule[0])]);
        });
    }

    obtenerHoras() {
        let response = 0;
        this.schedulesTimes.forEach(schedule => {
            let horasTrabajadas = Number.parseInt((schedule[0] - schedule[1]) / 3600000);
            if(horasTrabajadas > 8) {
                response += 8;
            }
            else {
                response += horasTrabajadas;
            }
        });
        return response;
    }

    obtenerHorasExtra() {
        let response = 0;
        this.schedulesTimes.forEach(schedule => {
            let horasTrabajadas = Number.parseInt((schedule[0] - schedule[1]) / 3600000);
            if(horasTrabajadas > 8) {
                response += horasTrabajadas - 8;
            }
        });
        return response;
    }

}

module.exports = Horarios;
