const minimist = require('minimist');
  //modulo externo


 //modulo interno

 const soma = require('./soma').soma;

 const args = minimist(process.argv.slice(2));

 const a = Number(args['a']);
 const b = Number(args['b']) ;
 
 soma(a, b)
