let TicketGenerator = function() {

};

TicketGenerator.prototype.getSalary = function() {
    return 10000;
}

if (typeof window === "undefined") {
    module.exports = TicketGenerator;
}
