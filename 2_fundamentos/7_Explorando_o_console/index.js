// imprimir mais de um valor

const x = 10;
const y = "marcos";
const z = [1, 2];

console.log(x, y, z);

// contagem de impressoes

console.count(`o valor de x: ${x}, contagem`);
console.count(`o valor de x: ${x}, contagem`);
console.count(`o valor de x: ${x}, contagem`);
console.count(`o valor de x: ${x}, contagem`);

// variaveis entre string

console.log("meu nome e %s", y)

//limpar o console

setTimeout( () => {
  console.clear()
},2000)
