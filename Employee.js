class Employees{
    constructor(ci, name, mount){
        this.ci=ci;
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


