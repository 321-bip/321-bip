const fs = require( 'fs' );

const arquivoAntigo = 'arquivoAntigo.txt';
const arquivoNovo = 'arquivoNovo.txt';

fs.rename( arquivoAntigo, arquivoNovo, ( err ) => {
    
    if( err ) {
        console.log( err );
        return;
    }
    console.log('arquivo remomeado');
} )