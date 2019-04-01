import SalesTable from "../TablaVentas";

let expect = require('chai').expect;

import CalcularSalario from '../CalcularSalario.js';
import ScheduleTable from '../Horarios.js';

describe('CalcularSalario', function() {

    it('Deberia retornar el sueldo de un empleado Fijo', function() {
        let calcularSalario = new CalcularSalario('Fijo', 1000);
        expect(calcularSalario.obtenerSalario()).equal(1000);
    });

    it('Deberia retornar el sueldo de un segundo empleado Fijo', function() {
        let calcularSalario = new CalcularSalario('Fijo', 2000);
        expect(calcularSalario.obtenerSalario()).equal(2000);
    });

    it('Deberia retornar el sueldo de un empleado Horas', function() {
        let schedule = new ScheduleTable([
            ['2019-05-21 14:00:00', '2019-05-21 16:00:00'],
            ['2019-05-21 18:00:00', '2019-05-21 20:00:00']
        ]);
        let calcularSalario = new CalcularSalario('Horas', 100, schedule);
        expect(calcularSalario.obtenerSalario()).equal(400);
    });

    it('Deberia retornar el sueldo de un segundo empleado Horas', function() {
        let schedule = new ScheduleTable([
            ['2019-05-21 14:00:00', '2019-05-21 16:00:00'],
            ['2019-05-21 18:00:00', '2019-05-21 21:00:00']
        ]);
        let calcularSalario = new CalcularSalario('Horas', 200, schedule);
        expect(calcularSalario.obtenerSalario()).equal(1000);
    });

    it('Deberia retornar el sueldo de un empleado Comision', function() {
        let sales = new SalesTable([
            ['2019-05-21 14:00:00', 2000],
            ['2019-05-21 15:00:00', 4000]
        ]);
        let calcularSalario = new CalcularSalario('Comision', 1000, null, 0.5, sales);
        expect(calcularSalario.obtenerSalario()).equal(4000);
    });

});
