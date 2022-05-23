const chalk = require('chalk');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        name: 'nome',
        message: 'qual seu nome?'
    },

    {
        name: 'idade',
        message: 'qual sua idade?'

    }]).then((answers) => {

        const usuario = ` O usuario ${answers.nome} tem ${answers.idade}`;

        if (!answers.nome || !answers.idade) {

            throw new Error('nome e idade sao obrigatorios')
        } else {
            
            console.log(chalk.bgYellow.black(usuario));
        }

    }).catch(err => console.log(err));