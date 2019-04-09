let expect = require('chai').expect;

import Horarios from '../Horarios';
import  CalculadoraFechaPago from "../CalculadoraFechaPago";


describe('calcularFechaPago',function () {
    it('Deberia retornar que es posible poder pagar a un empleado por hora en viernes', function () {
        let fecha = new Date("2019-04-05 14:00:00");
        let calculadoraFechaPago = new CalculadoraFechaPago('Horas',fecha);

        expect(calculadoraFechaPago.estaDisponibleParaPagar()).equal(true);
    });

    it('Deberia retornar que es posible pagar a un empleado por comision', function () {
        let fechaInicial = new Date("2019-04-01 08:00:00");
        let fechaFinal =new Date("2019-04-12 18:00:00");
        let calcularFechaPago = new CalculadoraFechaPago('Comision', fechaInicial, fechaFinal);

        expect(calcularFechaPago.estaDisponibleParaPagar()).equal(true);
    });

});


