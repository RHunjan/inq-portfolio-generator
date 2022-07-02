// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/generateMarkdown');
 
 
// TODO: Create an array of questions for user input

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: projectTitle => {
        if (projectTitle){
          return true;
        } else {
          console.log('Please enter the project title');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project?',
      validate: projectDesc => {
        if (projectDesc){
          return true;
        } else {
          console.log('Please enter the project description');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide instructions for installing your project',
      validate: projectInstal => {
        if (projectInstal){
          return true;
        } else {
          console.log('Please enter project installation instructions');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project',
      validate: projectUsage => {
        if (projectUsage){
          return true;
        } else {
          console.log('Please enter project usage');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Describe any contribution guidelines',
      validate: projectCont => {
        if (projectCont){
          return true;
        } else {
          console.log('Please enter the project contribution guidelines');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'Provide testing instructions',
      validate: projectTest => {
        if (projectTest){
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What is the license for project?',
      choices: ['Apache 2.0', 'BSD 3-Clause', 'GNU', 'MIT'],
         },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github user name?',
      validate: projectGit => {
        if (projectGit){
          return true;
        } else {
          console.log('Please enter your GitHub user name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: projectEmail => {
        if (projectEmail){
          return true;
        } else {
          console.log('Please enter an email address');
          return false;
        }
      }
    }
  ]);
};



 // TODO: Create a function to initialize app
 // Function call to initialize app
promptUser()
.then(answers => {

  
  const readMe = generateMarkdown(answers);
 
  // TODO: Create a function to write README file
  fs.writeFile('./readme.md', readMe, err => {
    if (err) throw new Error(err);
    console.log('worked!');
  })

});




