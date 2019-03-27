class Employees{
    constructor(name, type, mount_kadex, hours, comission_percentage,sales){
        this.name=name;
        this.mount=mount;
    }
    calculatorBalance(){
        throw new Error("This type is not recognized");
    }
}


class TimeComplete extends Employees{
    constructor(ci, name, mount){
        super(ci, name, mount);
    }

    calculatorBalance(){
        return this.mount;
    }
}
/*
class TimeParcial extends Employees{
    constructor(ci, name, mount, horas){
        super(ci, name, mount);
        this.horas=horas;
    }

    calculatorBalance(){
        return this.mount*this.horas;
    }
}


class Comision extends Employees{
    constructor(ci, name, mount, porcentageCommission){
        super(ci, name, mount)r;
    }
}*/

let inDate = new Date('2019-05-21 14:00:00');
let outDate = new Date('2019-05-21 16:01:00');

//console.log(Number.parseInt((outDate - inDate) / 3600000));
