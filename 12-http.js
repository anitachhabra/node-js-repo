const http = require('http')

const server = http.createServer((input, output)=>{
    if(input.url === '/about'){
        output.end('Here its me learning Node.js')
   } if (input.url === '/') {
    output.end('Here its me trying else')
}
      
});
server.listen(5000)