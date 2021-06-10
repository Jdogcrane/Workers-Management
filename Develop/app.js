// Starter file provided by Instructor (03/09/2021) AC
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

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```




const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

// collection of all built workers. Ready to be sent to templates
const builtWorkers = [];







// Prevents user from leaving input empty by checking value true
const validate = function (value) {
  if (value) {
    return true
  } else {
    return "Input field is empty please try again"
  }
}

// creates prompts in terminal for the user to input data for the app to collect

const start = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "\n---------Manager---------\n name:",
      name: "name",
      validate: validate
    },
    {
      type: "input",
      message: "employee ID:",
      name: "id",
      validate: validate
    },
    {
      type: "input",
      message: "email address:",
      name: "email",
      validate: validate
    },
    {
      type: "input",
      message: "office number:",
      name: "office",
      validate: validate
    }
    // checks the inputs, then activates menu once are there. 
    // Then puts inputs into a new manager then passes it to a array of builtworkers
  ]).then((inputs) => {
    if (inputs) {
      const builtManager = new Manager(inputs.name, inputs.id, inputs.email, inputs.office)
      builtWorkers.push(builtManager)
      menu()
    }
  })
};

// The menu for the prompts allowing user to choose who to add or finish 
function menu() {
  console.log('Current Built Workers', builtWorkers)
  inquirer.prompt([
    {
      type: "list",
      message: "\n---------MENU---------\n Select an Employee to add to the team:",
      name: "menuChoice",
      choices: [
        "Engineer",
        "Intern",
        "Finish & Build"
      ]
    },

    // depending on user choice start creating worker
  ]).then(({ menuChoice }) => {
    console.log(`\n ---------${menuChoice}---------`)

    if (menuChoice === "Engineer") {
      engineer()
    }
    if (menuChoice === "Intern") {
      intern()
    }
    if (menuChoice === "Finish & Build") {
      finish()
    }
  })
};

const engineer = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "name:",
      name: "name",
      validate: validate
    },
    {
      type: "input",
      message: "employee ID:",
      name: "id",
      validate: validate
    },
    {
      type: "input",
      message: "email address:",
      name: "email",
      validate: validate
    },
    {
      type: "input",
      message: "GitHub username:",
      name: "github",
      validate: validate
    }
    // checks the inputs, then activates menu once inputs is true
  ]).then((inputs) => {
    if (inputs) {
      const builtEngineer = new Engineer(inputs.name, inputs.id, inputs.email, inputs.github)
      builtWorkers.push(builtEngineer)
      menu()
    }
  })
};

const intern = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "name:",
      name: "name",
      validate: validate
    },
    {
      type: "input",
      message: "employee ID:",
      name: "id",
      validate: validate
    },
    {
      type: "input",
      message: "email address:",
      name: "email",
      validate: validate
    },
    {
      type: "input",
      message: "school:",
      name: "school",
      validate: validate
    }
    // checks the inputs, then activates menu once inputs is true
  ]).then((inputs) => {
    if (inputs) {
      const builtIntern = new Intern(inputs.name, inputs.id, inputs.email, inputs.school)
      builtWorkers.push(builtIntern)
      menu()
    }
  })
};


start(console.log("App Started"))

function finish() {
  console.log('\x1b[33m%s\x1b[0m', 'Render');
  htmlrenderer(builtWorkers)
  // objects need to be collected here and distributed to correct templates?
}


// creates new style.css based off user input
//     fs.writeFile('./output/style.css', style, function (err) {
  //         if (err) throw err, console.log('An error has stopped the file from being saved');
  //         console.log('Data Saved');
  //     });
  // }



  // fs.writeFile('./output/index.html', function (err) {
  //     if (err) throw err, console.log('An error has stopped the file from being saved');
  //     console.log('Data Saved');
  // });

