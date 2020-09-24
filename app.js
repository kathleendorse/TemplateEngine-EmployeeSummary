const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//-----------------------------------------------------------------------------------------------

//GLOBAL VARIABLES:


const employees = [];
let acceptEmployees = true;
let acceptManager = true;
// let acceptEngineer = true;
// let acceptIntern = true;

//function that initializes the application
const init = ()=>{
    //if employees are not accepted- return /do NOT execute function
    if(!acceptEmployees){
        return;
    }
    //otherwise run the program
    else{
        console.log("Please build your team");
        //if accept manager is true, run the create manager function
        if(acceptManager){
            createManager();
        }
        //otherwise run the create employee method
        else{
            createEmployee();
        }
    }
};

//FUNCTIONS TO BUILD DIFFERENT TEAM MEMBERS USING INQUIRER PROMPT :

//Generates manager object using inquirer prompt, pushes it to the employees array and stops accepting managers when finished
const createManager = () => {
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?"
        }
    ]).then(function(data){
        employee = new Manager(data.name, data.id, data.email, data.officeNumber);
        employees.push(employee);
        console.log(employees);
        acceptManager = false;
        createEmployee();
        // acceptEngineer = true;
        // acceptIntern = true;
    });  
}

//Logic for prompting user with options to add Interns, Engineers or stop adding all together 
//Response determines which functions (if any) are called
const createEmployee = () =>{
    inquirer.prompt({
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "choices",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members"
        ]}
    ).then(function(data){
        if(data.choices === "Intern"){
            createIntern();
        }
    });
//.then(  evaluate user selection in some way
//         // if (I dont  want to add any more employees){
//             //acceptEmployees = false;
//             //return;
//         //}      
//         //else{
//             //if (employeeType === "Intern"){
//             //    createIntern();
//             //}
//             //else{
//             //    createEngineer();
//             //}
    }
//);


// //Generates an engineer object using inquirer prompt, pushes it to the employees array and runs createEmployee function again when finished
// const createEngineer = () =>{

//     //inquirer.prompt.... (still need to flesh out)

//     employees.push(obj); //* obj??? syntax??
//     createEmployee();
// }

// //Generates an Intern object using inquirer prompt, pushes it to the employees array and runs the createEmployee function again when finished
const createIntern = () =>{
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        }
    ]).then(function(data){
        employee = new Intern(data.name, data.id, data.email, data.officeNumber);
        employees.push(employee);
        console.log(employees);
        createEmployee();
        // acceptEngineer = true;
        // acceptIntern = true;
    });  
}

//     //inquirer.prompt.... (still need to flesh out)

//     employees.push(obj); //* obj??? syntax??

//     createEmployee();


//initalize the application
init();




// startDevTeam = ()=>{
//     try{
//         let employees = [];
//         let employeType = no
//         console.log("Please build your team"); //**this works */
//         inquirer.prompt({
//             type: "input",
//             name: "name",
//             message: "What is your manager's name?"
//           })
//         // const { employee } = await inquirer.prompt(

//         // )
//         // .then({});
//     }
//     catch{

//     }

// }

// startDevTeam();

// Please build your team

// What is your manager's name?
// What is your manager's id?
// What is your manager's email?
// What is your manager's office number?

// Which type of team member would you like to add?
// Engineer
// Intern
// I don't want to add any more team members

// What is your engineer's name?
// What is your engineer's id?
// What is your engineer's email?
// What is your engineer's Github username?

// What is your intern's name?
// What is your intern's id?
// What is your intern's email?
// What is your intern's  school name?



//structure logic of prompts based on user input 


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```




//if employee type  - manager, prompt.....



//create an array of employees
//array contains objects
//each object has an employee type (manager, engineer, intern)

//use inquirer to prompt the user for an employee type (role)
//.then use the employee type to present prompts for additional info
//when the program begins the employee type is assumed to be managwe


//within build team we have 
//console log 
//an array of objects and booleans- 
//is manager/engineer/intern- when program stars is manager is true/ intern and engineer are false. 

//
//separate functions for each employee type


//init 