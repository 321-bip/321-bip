//modulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');

//modulos internos
const fs = require('fs');

function operation() {

    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'o que voce deseja fazer?',
        choices: ['criar conta', 'consultar saldo', 'depositar', 'sacar', 'sair',]

    }]).then(
        (answer) => {

            const action = answer['action'];

            if(action === 'criar conta') {
               createAccount();
            }else if(action === 'depositar' ) {

            }else if(action ===  'consultar saldo' ) {

            }else if(action === 'sacar') {

            }else if(action === 'sair' ) {

              console.log('Obrigado por usar o account');
              process.exit(); 
              
            }
        }
    ).catch((err) => console.log(err));
};

 // create an account
function createAccount() {
    console.log(chalk.bgGreen.black('Parabens por escolher o nosso banco!'));
    console.log(chalk.green('Defina as opçoes da sua conta a seguir'));

    buildAccount()
};

function buildAccount() {

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para sua conta',
        }
    ]).then((answer) => {
        const accountName = answer['accountName'];
        console.info(accountName);

        if(!fs.existsSync('accounts')) {

            fs.mkdirSync('accounts');
        }

        if(fs.existsSync(`accounts/${accountName}.json`)) {

            console.log(chalk.bgRed('esta conta ja existe, escolha outro nome'))
            buildAccount();
            return;
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', (err) => {
            console.log(err);
        });

        console.log(chalk.green('Parabens, a sua conta foi criada'))
        operation(); 

    }).catch((err) => console.log(err))
}

function man() {
    operation();
}
man()

console.log('iniciando projeto')