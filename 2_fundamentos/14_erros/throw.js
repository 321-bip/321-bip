const x = "10";

//checar se x e um numero

if(!Number.isInteger(x)){
    throw new Error("o valor de x nao e um numero")
}

console.log("continuando o codigo");