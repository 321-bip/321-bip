const chalk = require('chalk')

const nota = 5;

if(nota >= 7){
    console.log(chalk.green('parabens voce foi aprovado'))
}else{
    console.log(chalk.bgRed.black('voce ficou de recuperaçao'))
}
