const http = require('http');
const porta = 3000;

const servidor = http.createServer( ( req, res ) => {
     res.statusCode = 200;
     res.setHeader( 'contenty-type', 'text/html' )
     res.end( '<h1> este e meu primeiro servidor com html! <h1> <p>testando atualizaçao' )
} );

servidor.listen( porta, () => {
   console.log( "ola servidor" )
})