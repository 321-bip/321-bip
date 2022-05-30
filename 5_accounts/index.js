//modulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');

//modulos internos
const fs = require('fs');

function operation() {

    inquirer.prompt([

        {
            type: 'list',
            name: 'action',
            message: 'o que voce deseja fazer?',
            choices: ['criar conta', 'consultar saldo', 'depositar', 'sacar', 'sair',]
        }

    ]).then(

        (answer) => {

            const action = answer['action'];

            if (action === 'criar conta') {

                createAccount();

            } else if (action === 'depositar') {

                deposit()

            } else if (action === 'consultar saldo') {

                getAccountBalance()

            } else if (action === 'sacar') {

                withdraw()

            } else if (action === 'sair') {

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

        if (!fs.existsSync('accounts')) {

            fs.mkdirSync('accounts');
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {

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

function deposit() {

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?',
        }
    ]).then((answer) => {

        const acccountName = answer['accountName']
        // verify if account exists
        if (!checkAccount(acccountName)) {
            return deposit();
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto voce deseja depositar',
            }
        ]).then((answer) => {

            const amount = answer['amount']

            // add an amount
            addAmount(acccountName, amount)
            operation()
        }).catch((err) => console.log(err))

    }).catch((err) => console.log(err))
}

function addAmount(acccountName, amount) {
    const accountData = getAccount(acccountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu em erro, tente novamente mais tarde!'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${acccountName}.json`,
        JSON.stringify(accountData),
        (err) => console.log(err),
    )
    console.log(chalk.green(`Foi depositado o valor de r$${amount} na sua conta`))
}

function getAccount(acccountName) {

    const accountJson = fs.readFileSync(`accounts/${acccountName}.json`, {
        encoding: 'utf8',
        flag: 'r',
    })

    return JSON.parse(accountJson)
}

//show account balance

function getAccountBalance() {

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual nome da sua conta',
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        // verify if account exists

        if (!checkAccount(accountName)) {
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.black(
            `Ola, o saldo da sua conta e de r$${accountData.balance}`
        ))
        operation()
    }).catch((err) => console.log(err))

}

function checkAccount(accountName) {

    if (!fs.existsSync(`accounts/${accountName}.json`)) {

        console.log(chalk.bgRed('Esta conta nao existe, escolha outro nome!'));
        return false;
    }

    return true;
}

// withdraw an amount from user account

function withdraw() {

    inquirer.prompt([

        {
            name: 'accountName',
            message: 'Qual o nome da sua conta'
        }

    ]).then((answer) => {

        const accountName = answer['accountName']

        if (!checkAccount(accountName)) {
            return withdraw()
        }

        inquirer.prompt([

            {
                name: 'amount',
                message: 'Quanto deseja sacar'
            }
        ]).then((answer) => {

            const amount = answer['amount']

            removeAmount(accountName, amount)
            // operation()
        }).catch((err) => console.log(err))

    }).catch((err) => console.log(err))

}

function removeAmount(accountName, amount) {

    const accountData = getAccount(accountName)

    if (!amount) {

        console.log(chalk.bgRed.black('ocorreu um erro, tente novamente mas tarde'))
        return withdraw()
    }

    if (accountData.balance < amount) {

        console.log(chalk.bgRed.black('Valor indisponivel!'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        (err) => {
            console.log(err)
        }
    )
    console.log(chalk.green(`Foi realizado um saque de R$${amount} na sua conta!`))

    operation()
}

function man() {
    operation();
}
man()

console.log('iniciando projeto')