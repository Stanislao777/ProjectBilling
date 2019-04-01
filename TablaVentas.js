class TablaVentas {

    constructor(registroDeVentas) {
        this.registroDeVentas = registroDeVentas;
    }

    ObtenerDinero() {
        let response = 0;
        this.registroDeVentas.forEach(sales => {
            response += sales[1];
        })
        return response;
    }
}

module.exports = TablaVentas;
