const url = require( 'url' );
const anddres = 'https://www.instagram.com/p/CZiWS6FBnoo9cNl159np_HBK9O-m5zcozENvPc0/';
const parsedurl = new url.URL( anddres );

console.log( parsedurl.host );
console.log( parsedurl.pathname );
console.log( parsedurl.search );
console.log( parsedurl.searchParams );
console.log( parsedurl.searchParams.get( 'instagram' ) );

