import SalesTable from "../SalesTable";

let expect = require('chai').expect;

import Employee from '../Employee.js';
import ScheduleTable from '../ScheduleTable.js';

describe('EmployeeClass', function() {

    it('Deberia retornar el nombre de Jorge', function() {
        let employee = new Employee('Jorge');
        expect(employee.getName()).equal('Jorge');
    });

    it('Deberia retornar el nombre de Alvaro', function() {
        let employee = new Employee('Alvaro');
        expect(employee.getName()).equal('Alvaro');
    });

    it('Deberia retornar el tipo Fijo para Jorge', function() {
        let employee = new Employee('Jorge', 'Fijo');
        expect(employee.getType()).equal('Fijo');
    });

    it('Deberia retornar el tipo Horas para Jorge', function() {
        let employee = new Employee('Jorge', 'Horas');
        expect(employee.getType()).equal('Horas');
    });

    it('Deberia retornar el sueldo para Jorge', function() {
        let employee = new Employee('Jorge', 'Fijo', 1000);
        expect(employee.getSalary()).equal(1000);
    });

    it('Deberia retornar el sueldo para Alvaro', function() {
        let employee = new Employee('Alvaro', 'Fijo', 2000);
        expect(employee.getSalary()).equal(2000);
    });

    it('Deberia retornar el sueldo para Kevin', function() {
        let schedule = new ScheduleTable([
            ['2019-05-21 14:00:00', '2019-05-21 16:00:00'],
            ['2019-05-21 18:00:00', '2019-05-21 20:00:00']
        ]);
        let employee = new Employee('Kevin', 'Horas', 100, schedule);
        expect(employee.getSalary()).equal(400);
    });

    it('Deberia retornar el sueldo para Rodrigo', function() {
        let schedule = new ScheduleTable([
            ['2019-05-21 14:00:00', '2019-05-21 16:00:00'],
            ['2019-05-21 18:00:00', '2019-05-21 21:00:00']
        ]);
        let employee = new Employee('Rodrigo', 'Horas', 200, schedule);
        expect(employee.getSalary()).equal(1000);
    });

    it('Deberia retornar la comision de Jorge', function() {
        let schedule = new ScheduleTable([
            ['2019-05-21 14:00:00', '2019-05-21 16:00:00'],
            ['2019-05-21 18:00:00', '2019-05-21 21:00:00']
        ]);
        let sales = new SalesTable([
            ['2019-05-21 14:00:00', 2000],
            ['2019-05-21 15:00:00', 4000]
        ]);
        let employee = new Employee('Jorge', 'Fijo', 1000, schedule, 0.5, sales);
        expect(employee.getCommision()).equal(4000);
    });

});
