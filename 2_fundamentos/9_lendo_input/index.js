
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('qual sua linguagem preferida?', (language) => {
     
    if ( language == 'c#' ) {
      
        console.log('isso nei e uma linguagen')
    } 
    else {
        console.log(`A minha linguagem preferida e: ${language}`)
       
    }
   
    readline.close()
})