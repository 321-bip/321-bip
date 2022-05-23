const http = require( 'http' );
const fs = require( 'fs' );
const port = 3000;

const servidor = http.createServer( ( req, res ) => {
    fs.readFile( 'mensagem.html', ( err, data ) => {
       res.writeHead( 200, { 'content-type': 'text/html'})
       res.write( data )
       return res.end()
    } ) 
} )

servidor.listen(port, () => {

    console.log( `servidor rodando na porta: ${port}` );
} )
