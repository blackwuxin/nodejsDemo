var chalk = require('chalk');

chalk.blue('Hello World');

chalk.blue('Hello') + 'Wolrd' + chalk.red('!');

console.log(chalk.blue('Hello World'));

console.log(chalk.blue('Hello') + 'Wolrd' + chalk.red('!'));

console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));
