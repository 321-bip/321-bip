const lerArquivo = require('fs') // file system

lerArquivo.readFile('arquivo.txt', 'utf8', (err, data) => {

    if(err){
        console.log(err)
    }
        console.log(data)
    
});