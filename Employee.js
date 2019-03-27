class Employee {

    constructor(name, type, mount_kardex, scheduleTable) {
        this.name = name;
        this.type = type;
        this.mountKardex = mount_kardex;
        this.scheduleTable = scheduleTable;
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
        return 4000;
    }
}

module.exports = Employee;
