const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
   if(req.url === '/about'){
    res.end('In the about page now.')
   }
   res.end(`
   
   <h1>
    Oooppssss 
   </h1>
   <p> cant find sorry </p>
   `)
})



server.listen(5000)