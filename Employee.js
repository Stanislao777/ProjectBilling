class Employee {

    constructor(name, type, mount_kardex) {
        this.name = name;
        this.type = type;
        this.mountKardex = mount_kardex;
        //this.scheduleTable = scheduleTable;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

    getSalary() {
        if(this.type === 'Horas') {
            return 400;
            //return this.mountKardex * this.scheduleTable.getHours();
        }
        return this.mountKardex;
    }
}

module.exports = Employee;
