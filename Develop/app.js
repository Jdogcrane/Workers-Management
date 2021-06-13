// required modules/paths
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// output path
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
      message: "\n---------> Manager <---------\n name:",
      name: "name",
      default: "Chris",
      validate: validate
    },
    {
      type: "input",
      message: "employee ID:",
      name: "id",
      default: "28387",
      validate: validate
    },
    {
      type: "input",
      message: "email address:",
      name: "email",
      default: "Chris3982@gmail.com",
      validate: validate
    },
    {
      type: "input",
      message: "office number:",
      name: "office",
      default: "2820",
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
  inquirer.prompt([
    {
      type: "list",
      message: "\n---------> MENU <---------\n Select an Employee to add to the team:",
      name: "menuChoice",
      choices: [
        "Engineer",
        "Intern",
        "Finish & Render"
      ]
    },

    // depending on user choice start creating worker
  ]).then(({ menuChoice }) => {
    console.log(`\n ---------> ${menuChoice} <---------`)

    if (menuChoice === "Engineer") {
      engineer()
    }
    if (menuChoice === "Intern") {
      intern()
    }
    if (menuChoice === "Finish & Render") {
      finish()
    }
  })
};
// Engineer Builder
const engineer = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "name:",
      name: "name",
      default: "Robbie",
      validate: validate
    },
    {
      type: "input",
      message: "employee ID:",
      name: "id",
      default: "238378",
      validate: validate
    },
    {
      type: "input",
      message: "email address:",
      name: "email",
      default: "RobbieM@gmail.com",
      validate: validate
    },
    {
      type: "input",
      message: "GitHub username:",
      name: "github",
      default: "RobbieMRob",
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
// Intern Builder
const intern = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "name:",
      name: "name",
      default: "Billy Jr.",
      validate: validate
    },
    {
      type: "input",
      message: "employee ID:",
      name: "id",
      default: "2387",
      validate: validate
    },
    {
      type: "input",
      message: "email address:",
      name: "email",
      default: "BillyJrJohn@gmail.com",
      validate: validate
    },
    {
      type: "input",
      message: "school:",
      name: "school",
      default: "UNCC",
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
// starts the app
start(console.log("\x1b[33m%s\x1b[0m", "---------> App Running <---------\n"))

function finish() {
  console.log("\x1b[33m%s\x1b[0m", "\n---------> Rendering... <---------\n ");
  if (!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR);
  }
   fs.writeFileSync(outputPath, render(builtWorkers)) 
   console.log("\x1b[32m", "Completed -----> Check output folder for built HTML")
   console.log("\x1b[36m%s\x1b[0m", "\n---------> Shutting Down... <---------\n")
};

