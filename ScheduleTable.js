class ScheduleTable {

    constructor(schedulesTimes) {
        this.schedulesTimes = schedulesTimes;
    }

    getHours() {
        let response = 0;
        this.schedulesTimes.forEach(function(schedule) {
            response += Number.parseInt((new Date(schedule[1]) - new Date(schedule[0])) / 3600000);
        });
        return response;
    }

}

module.exports = ScheduleTable;
