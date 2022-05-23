const path = require( 'path' );

const customPath = "/relatorio/marcos/relatorio1.pdf";

console.log( path.dirname( customPath ) );
console.log( path.basename( customPath ) );
console.log( path.extname( customPath ) );