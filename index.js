const inquirer = require('inquirer');

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
          console.log('Please enter project testing instructions');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What is the license for project?',
      choices: ['A', 'B', 'C', 'D'],
      validate: projectLicense => {
        if (projectLicense){
          return true;
        } else {
          console.log('Please enter the project license');
          return false;
        }
      }
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

promptUser().then(answers => console.log(answers));

//const fs = require('fs');
//const generatePage = require('./src/page-template');

//const pageHTML = generatePage(name, github);

//fs.writeFile('./index.html', pageHTML, err => {
 // if (err) throw err;

 // console.log('Portfolio complete! Check out index.html to see the output!');
//});