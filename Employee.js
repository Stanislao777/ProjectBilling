class Employee {

    constructor(name, type, mount_kardex) {
        this.name = name;
        this.type = type;
        this.mountKardex = mount_kardex;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

    getSalary() {
        return this.mountKardex;
    }
}

module.exports = Employee;
