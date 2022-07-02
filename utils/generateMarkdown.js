// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  
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