var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Employee from '../Employee.js';
//import TicketGenerator from '../TicketGenerator.js';

describe('EmployeeClass', function() {

    let ticketGenerator;

    beforeEach(function() {
        ticketGenerator = new TicketGenerator();
    });

    /*it('Deberia retornar el nombre del empleado', function() {
        let employee = new Employee('Jorge', 1000);
        expect(employee.getName()).equal('Jorge');
        employee = new Employee('Pedro', 1000);
        expect(employee.getName()).equal('Pedro');
    });

    it('Deberia retornar el monto del empleado', function() {
        let employee = new Employee('Jorge', 1000);
        expect(employee.getMount()).equal(1000);
        employee = new Employee('Juaquin', 2000);
        expect(employee.getMount()).equal(2000);
    });

    it('Deberia retornar el sueldo del empleado fijo', function() {
        let employee = new Employee('Jorge', 1000);
        expect(ticketGenerator.getSalary(employee)).equal(10000);
        employee = new Employee('Alvaro', 2000);
        expect(ticketGenerator.getSalary(employee)).equal(20000);
        employee = new Employee('Jorge', 3000);
        expect(ticketGenerator.getSalary(employee)).equal(30000);
    });

    it('Deberia retornar el sueldo del empleado por horas', function() {
        let employee = new Employee('Jorge', 100);
        //expect(ticketGenerator.getSalary(employee)).equal(1200);
    });
*/
});
