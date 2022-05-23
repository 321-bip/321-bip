/* o codigo continua progredindo e em um ponto
   futuro obtem a resposta da execuçao assincrona*/

   const fs = require("fs");

   console.log("inicio");

   fs.writeFile('arquivo.txt', 'oi', (err) => {
       setTimeout( () => {
           console.log('arquivo criado')
       }, 1000 )
   })

   console.log('fim')