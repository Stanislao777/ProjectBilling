import SalesTable from "../TablaVentas";

let expect = require('chai').expect;

import Empleado from '../Empleado.js';

describe('Empleado', function() {

    it('Deberia retornar el ci del empleado', function() {
        let empleado = new Empleado('Jorge');
        expect(empleado.obtenerNombre()).equal('Jorge');
    });

});
