// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getRole(){

    }
}

module.exports = Employee;
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


