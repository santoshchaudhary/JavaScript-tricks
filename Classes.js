
let PersonC = class {
    constructor(nm, id) {
        this.name = nm;
        this.id = id;
    }
    getDetails() {
        return `${this.name} :: ${this.id}`;
    }
};

let bob = new PersonC('Bob', 124);
console.log(bob.getDetails());


let EmployeeC = class extends PersonC { // EmployeeC prototype links to PersonC prototype
    constructor(nm, id, salary) {
        super(nm, id);
        this.salary = salary;
    }
    employeeInfo() {
        return `${this.name} :: ${this.id} :: ${this.salary}`;
    }
};

let noomi = new EmployeeC('Noomi', 23, 20000);
console.log(noomi.employeeInfo());