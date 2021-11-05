let PersonP = function(nm, id) {
    this.name = nm;
    this.id = id;
}
PersonP.prototype.getDetails = function() {
    return `${this.name} :: ${this.id}`;
};

let fred = new PersonP('Fred', 321);
console.log(fred.getDetails());


let EmployeeP = function(nm, id, salary) {
    PersonP.call(this, nm, id);
    this.salary = salary;
}
Object.setPrototypeOf(EmployeeP, PersonP.prototype); // extends

EmployeeP.prototype.employeeInfo = function() {
    return `${this.name} :: ${this.id} :: ${this.salary}`;
}
let marry = new EmployeeP('Marry', 23, 20000);
console.log(marry.employeeInfo());




/*
let arr = ["Akshay", "Aditiya"]
let object = {
    name: "Akshay",
    city: "New Delhi",

    getIntro: function() {
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name: 'Sandy',
    city: 'Mumbai',
}
// Never to this
object2.prototype = object;

console.log(object.getIntro())
console.log(object2.getIntro())
*/