// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
//require employee

class Intern extends Employee{
    constructor(name, id, email, school){ //*
        super(name, id, email); 
        this.school = school;
        this.role = "Intern"; 
    }
}


//figure out how tou're inheriting from employee and overwriting the getrole method to return differently


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


// Intern will also have:
// -school
// -getSchool()
// -getRole() // Overridden to return 'Intern'**

module.exports = Intern;