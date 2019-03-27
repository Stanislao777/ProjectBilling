let expect = require('chai').expect;

import SalesTable from '../SalesTable';

describe('SalesTableClass', function() {

    it('Deberia retornar el monto total para una sola venta', function() {
        let sales = new SalesTable([
            ['2019-05-21 14:00:00', 1000]
        ]);
        expect(sales.getMoney()).equal(1000);
    });

    it('Deberia retornar el monto total para una sola venta', function() {
        let sales = new SalesTable([
            ['2019-05-21 14:00:00', 2000]
        ]);
        expect(sales.getMoney()).equal(2000);
    });

});
