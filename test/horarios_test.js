let expect = require('chai').expect;

import ScheduleTable from '../Horarios';

describe('ScheduleTableClass', function() {

    it('Deberia retornar una hora', function() {
        let schedule = new ScheduleTable([
            ['2019-05-21 14:00:00', '2019-05-21 15:00:00']
        ]);
        expect(schedule.obtenerHoras()).equal(1);
    });

    it('Deberia retornar dos horas', function() {
        let schedule = new ScheduleTable([
            ['2019-05-21 14:00:00', '2019-05-21 16:00:00']
        ]);
        expect(schedule.obtenerHoras()).equal(2);
    });

    it('Deberia retornar cuatro horas', function() {
        let schedule = new ScheduleTable([
            ['2019-05-21 14:00:00', '2019-05-21 16:00:00'],
            ['2019-05-21 18:00:00', '2019-05-21 20:00:00']
        ]);
        expect(schedule.obtenerHoras()).equal(4);
    });
});
