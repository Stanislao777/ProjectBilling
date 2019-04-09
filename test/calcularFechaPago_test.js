let expect = require('chai').expect;

import CalculadoraFechaPago from "../CalculadoraFechaPago";
import Horarios from '../Horarios.js';

describe('CalcularFechaPago', function() {

    it('Deberia retornar que es posible pagar a un empleado por hora en viernes', function() {
        let fecha = new Date("2019-04-05 14:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Horas', fecha);
        expect(calculadoraFechaPago.estaDisponibleParaPagar()).equal(true);
    });

    it('Deberia no retornar que es posible pagar a un empleado por hora en viernes', function() {
        let fecha = new Date("2019-04-06 14:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Horas', fecha);
        expect(calculadoraFechaPago.estaDisponibleParaPagar()).equal(false);
    });

    it('Deberia retornar que es posible pagar a un empleado por comision', function() {
        let fechaInicial = new Date("2019-04-01 08:00:00");
        let fechaFinal = new Date("2019-04-12 18:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Comision', fechaInicial, fechaFinal);
        expect(calculadoraFechaPago.estaDisponibleParaPagar()).equal(true);
    });

    it('Deberia no retornar que es posible pagar a un empleado por comision', function() {
        let fechaInicial = new Date("2019-04-01 08:00:00");
        let fechaFinal = new Date("2019-04-11 18:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Comision', fechaInicial, fechaFinal);
        expect(calculadoraFechaPago.estaDisponibleParaPagar()).equal(false);
    });

    it('Deberia retornar que es posible pagar a un empleado fijo', function() {
        let fechaInicial = new Date("2019-04-01 08:00:00");
        let fechaFinal = new Date("2019-04-30 18:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Fijo', fechaInicial, fechaFinal);
        expect(calculadoraFechaPago.estaDisponibleParaPagar()).equal(true);
    });

    it('Deberia no retornar que es posible pagar a un empleado fijo', function() {
        let fechaInicial = new Date("2019-04-01 08:00:00");
        let fechaFinal = new Date("2019-04-29 18:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Fijo', fechaInicial, fechaFinal);
        expect(calculadoraFechaPago.estaDisponibleParaPagar()).equal(false);
    });

});