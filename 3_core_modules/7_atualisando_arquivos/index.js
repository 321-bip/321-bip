const http = require( 'http' );
const fs = require( 'fs' );
const port = 3000;

const servidor = http.createServer( ( req, res ) => {

    const urlinfo = require('url').parse( req.url, true );
    const name = urlinfo.query.name;

    if( !name ) {

        fs.readFile( 'index.html', ( err, data ) => {
            res.writeHead( 200, { 'content-type': 'text/html'} );
            res.write( data );
            return res.end();

         } ) 
    } else {
    
        const newName = name + '\,\r\n' 
        fs.appendFile("arquivo.txt", newName, ( err, data ) => {

            res.writeHead( 302, { Location: "/" } );
             return res.end();
        } )
    }
    
} )

servidor.listen(port, () => {

    console.log( `servidor rodando na porta: ${port}` );
} )
