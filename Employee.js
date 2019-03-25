let Employee = function(name, mount) {
    this.name = name;
    this.mount = mount;
};

Employee.prototype.getName = function() {
    return this.name;
};

Employee.prototype.getMount = function() {

};

if (typeof window === "undefined") {
    module.exports = Employee;
}
