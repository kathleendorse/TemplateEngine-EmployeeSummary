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

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

//-----------------------------------------------------------------------------------------------




//Bringing in additional packages & Global Variable to hold employee objects:
const util = require("util");               
const writeFileAsync = util.promisify(fs.writeFile);  
const employees = [];



//Initalization- calls the first function
const init = () => { 
    console.log("Please build your team");
        promptManager();
};


//3 Functions for prompting user & instantiating new employee objects pushed to the employees array
const promptManager = () => {
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
        promptEmployee();
    });  
}

const promptEngineer = () =>{
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's Github?"
        }
    ]).then(function(data){
        employee = new Engineer(data.name, data.id, data.email, data.github);
        employees.push(employee);
        promptEmployee();
    });
}

const promptIntern = () => {
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
        employee = new Intern(data.name, data.id, data.email, data.school);
        employees.push(employee);
        promptEmployee();
    });  
}

//Prompt Employee- will either instantiate more employees or invoke function to generate html & writeFile (user choice)
const promptEmployee = () => {
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
            promptIntern();
        }
        else if (data.choices === "Engineer"){
            promptEngineer();
        }
        else{
            writeTeam();   
        }
    });
}


//Renders HTML & writes to new team.html file
async function writeTeam(){                                        
    const renderEmployees = render(employees); 
    await writeFileAsync(outputPath, renderEmployees);
}


//Invocation- Run the program
init();



//-------------------------------------------------------------------------------------------















