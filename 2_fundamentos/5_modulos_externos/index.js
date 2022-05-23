const minimist = require('minimist');
const args = minimist(process.argv.slice(2))
const nome = args['nome']
const idade = args['idade']

console.log(`meu nome e ${nome} e tenho ${idade}`)