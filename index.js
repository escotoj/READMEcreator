const inquirer = require('inquirer');
const fs = require('fs')

inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'titleofProject',
    },
    {
      type: 'input',
      message: 'Please descrive your project and its purpose?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'what are the steps to install this app',
      name: 'installation',
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
      message: 'Please enter name of licence to be used',
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
    },{
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
  
