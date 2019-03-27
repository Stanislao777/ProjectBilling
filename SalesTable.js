class SalesTable {

    constructor(salesLogs) {
        this.salesLogs = salesLogs;
    }

    getMoney() {
        return this.salesLogs[0][1];
    }
}

module.exports = SalesTable;
