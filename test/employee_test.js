let expect = require('chai').expect;

import Employee from '../Employee.js';

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

});
