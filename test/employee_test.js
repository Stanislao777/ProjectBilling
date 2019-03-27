let expect = require('chai').expect;

import Employee from '../Employee.js';

describe('EmployeeClass', function() {

    it('Deberia retornar el nombre de Jorge', function() {
        let employee = new Employee('Jorge');
        expect(employee.getName()).equal('Jorge');
    });
});
