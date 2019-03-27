class SalesTable {

    constructor(salesLogs) {
        this.salesLogs = salesLogs;
    }

    getMoney() {
        let response = 0;
        this.salesLogs.forEach(sales => {
            response += sales[1];
        })
        return response;
    }
}

module.exports = SalesTable;
