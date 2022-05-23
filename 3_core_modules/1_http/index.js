const http = require( 'http' );
const porta = 3000;

const servidor = http.createServer( ( req, res ) => {
    
    res.write( 'oi http' );
    res.end();
} );

servidor.listen( porta, () => {
    console.log(`servidor rodando na porta: ${ porta }`);
} );