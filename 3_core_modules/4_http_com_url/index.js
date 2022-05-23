const http = require('http');
const porta = 3000;

const servidor = http.createServer( ( req, res ) => {

    const urlInfo = require( 'url' ).parse( req.url, true );
    const name = urlInfo.query.name;
     res.statusCode = 200;
     res.setHeader( 'contenty-type', 'text/html' )
   
     if( !name ) {
         res.end( '<h1>Preencha seu nome:</h1><form method="Get"><input type="text" name="name"/><input type="submit" value="Enviar"></form>' );
     } else {
        res.end( `<h1>Seja bem vindo ${name}</h1>` );
     }
} );

servidor.listen( porta, () => {
   console.log( "ola servidor" )
})