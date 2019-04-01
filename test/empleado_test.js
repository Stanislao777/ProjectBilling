import SalesTable from "../TablaVentas";

let expect = require('chai').expect;

import Empleado from '../Empleado.js';
import CalcularSalario from "../CalcularSalario";

describe('Empleado', function() {

    it('Deberia retornar el nombre del empleado', function() {
        let empleado = new Empleado('Jorge');
        expect(empleado.obtenerNombre()).equal('Jorge');
    });

    it('Deberia retornar el nombre del empleado', function() {
        let empleado = new Empleado('Alvaro');
        expect(empleado.obtenerNombre()).equal('Alvaro');
    });

    it('Deberia retornar el ci del empleado', function() {
        let empleado = new Empleado('Jorge', 10);
        expect(empleado.obtenerCi()).equal(10);
    });

    it('Deberia retornar el ci del segundo empleado', function() {
        let empleado = new Empleado('Jorge', 20);
        expect(empleado.obtenerCi()).equal(20);
    });

    it('Deberia retornar el salario del empleado', function() {
        let calcularSalario = new CalcularSalario('Fijo', 1000);
        let empleado = new Empleado('Jorge', 20, calcularSalario);
        expect(empleado.obtenerSalario()).equal(1000);
    });

    it('Deberia retornar el salario del empleado', function() {
        let calcularSalario = new CalcularSalario('Fijo', 2000);
        let empleado = new Empleado('Alvaro', 20, calcularSalario);
        expect(empleado.obtenerSalario()).equal(2000);
    });

});
