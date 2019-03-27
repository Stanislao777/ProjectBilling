class Employee {

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

    getSalary() {
        return 1000;
    }
}

module.exports = Employee;
