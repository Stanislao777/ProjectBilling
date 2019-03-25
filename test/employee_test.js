var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import Employee from '../Employee.js';

describe('EmployeeClass', function() {

    beforeEach(function() {
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
    });

});
