class Employee {

    constructor(name, type, mount_kardex, scheduleTable, commision_percentage, sales) {
        this.name = name;
        this.type = type;
        this.mountKardex = mount_kardex;
        this.scheduleTable = scheduleTable;
        this.commisionPercentage = commision_percentage;
        this.sales = sales;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

    getSalary() {
        if(this.type === 'Horas') {
            return this.mountKardex * this.scheduleTable.getHours();
        }
        if(this.type === 'Fijo') {
            return this.mountKardex;
        }
        throw new Error('Empleado no especificado');
    }

    getCommision() {
        return this.getSalary() + this.commisionPercentage * this.sales.getMoney();
    }
}

module.exports = Employee;
