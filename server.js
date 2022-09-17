const http = require('http')
const path = require('path')
const fs = require('fs')

http.createServer((req,res)=>{
    const filePath = path.join(__dirname,'public','index.html')
    const file = req.url === '/'? "index.html": req.url
    
    fs.readFile(path.join(__dirname, 'public', 'index.html'),
    (error,content)=>{
        if(error) throw error

        res.end(content)
    })
}).listen(3000,()=>console.log('Server is running'))

