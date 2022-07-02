 
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var badge = '';
var badgeMessage = '';

function renderLicenseBadge(license) {
  if (license == 'Apache 2.0'){
    badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    badgeMessage = 'This application is covered under Apache 2.0 license terms. Click badge for more info: ';
  } else if (license == 'BSD 3-Clause'){
    badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    badgeMessage = 'This application is covered under BSD 3-Clause license terms. Click badge for more info: ';
} else if (license == 'GNU') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    badgeMessage = 'This application is covered under GNU license terms. Click badge for more info: ';
} else if (license == 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    badgeMessage = 'This application is covered under MIT license terms. Click badge for more info: ';
} else {
  badge = '';
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

//take in data / if it's true check to see license, if not put empty string


function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
 
  return `
  # ${data.title}    
  ${badge}
  
  ## Description
   ${data.description}

  ## Table of Contents
  [Installation](#Installation)<br>
  [Usage](#Usage)<br>
  [License](#License)<br>
  [Contributing](#Contributing)<br>
  [Tests](#Tests)<br>
  [Questions](#Questions)



  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${badgeMessage}

  ${badge}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  ${data.github}
  ${data.email}




`;
}

module.exports = generateMarkdown;
