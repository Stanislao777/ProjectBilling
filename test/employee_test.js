var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Employee from '../Employee.js';
import TicketGenerator from '../TicketGenerator.js';

describe('EmployeeClass', function() {

    let ticketGenerator;

    beforeEach(function() {
        ticketGenerator = new TicketGenerator();
    });

    it('Deberia retornar el nombre del empleado', function() {
        let employee = new Employee('Jorge', 1000);
        expect(employee.getName()).equal('Jorge');
        employee = new Employee('Estanis', 1000);
        expect(employee.getName()).equal('Estanis');
    });

    it('Deberia retornar el monto del empleado', function() {
        let employee = new Employee('Jorge', 1000);
        expect(employee.getMount()).equal(1000);
        employee = new Employee('Estanis', 2000);
        expect(employee.getMount()).equal(2000);
    });

    it('Deberia retornar el sueldo del empleado fijo', function() {
        let employee = new Employee('Jorge', 1000);
        expect(ticketGenerator.getSalary()).equal(10000);
    });

});
