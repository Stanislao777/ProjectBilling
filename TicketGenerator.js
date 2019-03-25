let TicketGenerator = function() {

};

TicketGenerator.prototype.getSalary = function(employee) {
    return employee.getMount() * 10;
}

if (typeof window === "undefined") {
    module.exports = TicketGenerator;
}
