class Employee {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getType() {
        return 'Fijo';
    }
}

module.exports = Employee;
