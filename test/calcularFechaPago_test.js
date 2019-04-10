let expect = require('chai').expect;

import CalculadoraFechaPago from "../CalculadoraFechaPago";
import Horarios from '../Horarios.js';

describe('CalcularFechaPago', function() {

    it('Deberia retornar que es posible pagar a un empleado por hora en viernes', function() {
        let fecha = new Date("2019-04-05 14:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Horas', fecha);
        expect(calculadoraFechaPago.inicioDePago()).equal('5-4-2019');
    });

    it('Deberia no retornar que es posible pagar a un empleado por hora en viernes', function() {
        let fecha = new Date("2019-04-06 14:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Horas', fecha);
        expect(calculadoraFechaPago.inicioDePago()).equal('12-4-2019');
    });

    it('Deberia retornar que es posible pagar a un empleado por comision', function() {
        let fechaInicial = new Date("2019-04-01 08:00:00");
        let fechaFinal = new Date("2019-04-12 18:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Comision', fechaInicial, fechaFinal);
        expect(calculadoraFechaPago.inicioDePago()).equal('12-4-2019');
    });

    it('Deberia no retornar que es posible pagar a un empleado por comision', function() {
        let fechaInicial = new Date("2019-04-27 08:00:00");
        let fechaFinal = new Date("2019-05-27 18:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Comision', fechaInicial, fechaFinal);
        expect(calculadoraFechaPago.inicioDePago()).equal('10-5-2019');
    });

    it('Deberia retornar que es posible pagar a un empleado fijo', function() {
        let fechaInicial = new Date("2019-04-01 08:00:00");
        let fechaFinal = new Date("2019-04-30 18:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Fijo', fechaInicial, fechaFinal);
        expect(calculadoraFechaPago.inicioDePago()).equal('30-4-2019');
    });

    it('Deberia no retornar que es posible pagar a un empleado fijo', function() {
        let fechaInicial = new Date("2019-06-01 08:00:00");
        let fechaFinal = new Date("2019-06-30 18:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Fijo', fechaInicial, fechaFinal);
        expect(calculadoraFechaPago.inicioDePago()).equal('28-6-2019');
    });

});