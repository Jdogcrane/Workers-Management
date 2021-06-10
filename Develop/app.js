// Starter file provided by Instructor (03/09/2021) AC

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

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


// Prevents user from leaving input empty by checking value true
const validate = function (value) {
    if (value) {
        return true
    } else {
        return "Input field is empty please try again"
    }
}

// creates prompts in terminal for the user to input data for the app to collect
inquirer.prompt([
    {
        type: 'input',
        message: 'Title for your portfolio:',
        name: 'mem1',
        default: '-Worker Name goes here-'
    },
    {
        type: 'confirm',
        message: 'wanna keep going bro?',
        name: 'next',
    }

    // puts data from user inputs into function
]).then(function ({mem1, next}) {

    // css styling that is filled dynamically based off user input
    // const style = `
    
    // body {
    //     background-color: ${cssColor};
    //     color: ${textColor}
    //     }`

    // basic template that gets filled dynamically based off user input
    if (mem1){
        var worker1 = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${mem1}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
        </div>`
    } else {
    worker1 = ``
    }



    const template = `
    <html lang="en">
      <head>
        <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
      </head>
    <body> 
    
     ${worker1}
          

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card 2</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card 3</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>

    </body>
    </html>`;

    // starts and sends data to function
    if (!next) {
        createReadMe(template)
       }
}
);
// creates README with dynamic inputs based off users desires.
function createReadMe(template) {

    fs.writeFile('./output/index.html', template, function (err) {
        if (err) throw err, console.log('An error has stopped the file from being saved');
        console.log('Data Saved');
    });
}
// creates new style.css based off user input
//     fs.writeFile('./output/style.css', style, function (err) {
//         if (err) throw err, console.log('An error has stopped the file from being saved');
//         console.log('Data Saved');
//     });
// }