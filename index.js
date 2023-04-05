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
      message: 'Please describe your project and its purpose?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter name of license to be used (ex: MIT, Microsoft Public License, Mozilla, ect.)',
      name: 'license',
    },
    {
      type: 'input',
      message: 'What do we need to for the installation of this project?',
      name: 'instal',
    },
    {
      type: 'input',
      message: 'If you would like to contribute or have any feedback to the project, please enter here',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'Example of how to use you project',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'List the features in this project',
      name: 'features',
    },
    {
      type: 'input',
      message: 'Please list contributors to this app to give credits',
      name: 'credits',
    },
    {
      type: 'input',
      message: 'What is your GitHub username',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please enter in your email',
      name: 'email',
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
  - [Installation](#Installation)
  - [Credits](#Credits)
  - [License](#License)
  - [Contribute](#Contribute)
  - [Questions](#Questions)
  
  ## Installation
  ${data.instal}
  
  ## License
  License: ${data.license}
  Usage: ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## Contribute to Project
  ${data.contribute}
  
  ## Questions
  For more questions please contact below: 
  Email: ${data.email} 
  GitHub: ${data.github}`;
};

// .then((answers) => {
//   console.log(answers);

// fs.writeFile('README.md', README, (error =>
//         error)
  
