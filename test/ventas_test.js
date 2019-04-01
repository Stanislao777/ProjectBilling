let expect = require('chai').expect;

import TablaVentas from '../TablaVentas';

describe('ClaseTablaVentas', function() {

    it('Deberia retornar el monto total para una sola venta', function() {
        let ventas = new TablaVentas([
            ['2019-05-21 14:00:00', 1000]
        ]);
        expect(ventas.ObtenerDinero()).equal(1000);
    });

    it('Deberia retornar el monto total para una sola venta', function() {
        let ventas = new TablaVentas([
            ['2019-05-21 14:00:00', 2000]
        ]);
        expect(ventas.ObtenerDinero()).equal(2000);
    });

    it('Deberia retornar el monto total para varias ventas', function() {
        let ventas = new TablaVentas([
            ['2019-05-21 14:00:00', 2000],
            ['2019-05-21 15:00:00', 4000]
        ]);
        expect(ventas.ObtenerDinero()).equal(6000);
    });

});
