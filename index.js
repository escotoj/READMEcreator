const inquirer = require('inquirer');
const fs = require('fs')

inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please descrive your project and its purpose?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Re-enter password to confirm:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please list contributors to this app to give credits',
      name: 'credits',
    },
    {
      type: 'input',
      message: 'Please enter name of licence to be used (ex: MIT, Microsoft Public License, Mozilla, ect.)',
      name: 'licence',
    },
    {
      type: 'input',
      message: 'What are the instructions to run a test',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Please type in your GitHub username',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please type in your email',
      name: 'email',
    },
    {
      type: 'list',
      message: 'Example of how to use you project',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'List the features in this project',
      name: 'features',
    },
  ]).then((answers) => {
    console.log(answers);
    const README = template(answers); // create function for template 
    fs.writeFile('README.md', README, error =>
        error
    );
});

// .then((answers) => {
//   console.log(answers);

// fs.writeFile('README.md', README, (error =>
//         error)
  

// funtion that takes the data parameter to inject the answers in proper area using back ticks (template literals)
function template(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## License and Usage
  License: ${data.license}
  Usage: ${data.usage}
  
  ## Contributing
  ${data.credits}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For more questions please contact below: 
  Email:${data.email} 
  GitHub: ${data.github}.`;
};

// .then((answers) => {
//   console.log(answers);

// fs.writeFile('README.md', README, (error =>
//         error)
  
