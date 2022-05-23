// nome

function pegarAgumento(num1, num2){
   const args = process.argv.slice(2);
   const nome = args[num1].split('=')[1];
   const idade = args[num2].split('=')[1];
   console.log(`meu nome e ${nome} e tenho ${idade} anos `) ;
}
pegarAgumento(0, 1);