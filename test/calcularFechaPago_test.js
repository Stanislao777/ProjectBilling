let expect = require('chai').expect;

import CalculadoraFechaPago from '../CalculadoraFechaPago.js';

describe('calcularFechaPago',function () {
    it('Deberia retornar que es posible poder pagar a un empleado por hora en viernes', function () {
        let fecha = new Date("2019-04-05 14:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Horas',fecha);

        expect(calculadoraFechaPago.estaDisponibleParaPagar()).equal(true);
    });

});


