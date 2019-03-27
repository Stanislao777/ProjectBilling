class ScheduleTable {

    constructor(schedulesTimes) {
        this.schedulesTimes = [];
        schedulesTimes.forEach(schedule => {
            this.schedulesTimes.push([new Date(schedule[1]), new Date(schedule[0])]);
        });
    }

    getHours() {
        let response = 0;
        this.schedulesTimes.forEach(schedule => {
            response += Number.parseInt((schedule[0] - schedule[1]) / 3600000);
        });
        return response;
    }

}

module.exports = ScheduleTable;
