// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    // constructor(){
        
    // }
}

module.exports = Manager;

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

// Manager will also have:
// -officeNumber
// -getRole() // Overridden to return 'Manager'**

