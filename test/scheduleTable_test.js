let expect = require('chai').expect;

import ScheduleTable from '../ScheduleTable';

describe('ScheduleTableClass', function() {

    it('Deberia retornar una hora', function() {
        let schedule = new ScheduleTable([
            ['2019-05-21 14:00:00', '2019-05-21 15:00:00']
        ]);
        expect(schedule.getHours()).equal(1);
    });

});
