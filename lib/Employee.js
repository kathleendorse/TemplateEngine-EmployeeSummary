// TODO: Write code to define and export the Employee class


class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"; 
    }
    getName(){
        return this.name; 
    }
    getRole(){                  
        return this.role;     
    }
    getId(){
        return this.id;
    }
}

module.exports = Employee;

// const Manager = require("./Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");




// × Can get name via getName() (2ms)
// × Can get id via getId() (1ms)
// × Can get email via getEmail() (1ms)
// × getRole() should return "Employee" (3ms)

// ||	or	(x == 5 || y == 5) is false


// function Terminal(file, args, opt) {
//     if (!(this instanceof Terminal)) {
//        return new Terminal(file, args, opt);
//     }







//this doesnt need to bring in anything.  but you will need to export
//figure out whether you're adding methods as a prototype or just a regular constructor

// The different employee types should all inherit some methods and properties from a base class of Employee

// The first class is an Employee parent class with the following properties and
// methods:

// -name
// -id
// -email
// -getName()
// -getId()
// -getEmail()
// -getRole() // Returns 'Employee'**


