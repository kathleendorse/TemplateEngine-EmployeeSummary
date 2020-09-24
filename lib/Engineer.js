// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
//require employee
class Engineer extends Employee{
    constructor(name, id, email, github){
        
        super(name, id, email); 
        this.github = github;
        this.role = "Engineer"; //*  
    }
    getRole(){
        return this.role; //*
    }
    getGithub(){
        return this.github;
    }

}

module.exports = Engineer;

     
    
        
    // }

    // getGithub(){

    //}


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

// Engineer will also have:
// -github  // GitHub username
// -getGithub()
// -getRole() // Overridden to return 'Engineer'**


