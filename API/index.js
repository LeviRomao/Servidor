const http = require('http')
const fs = require('fs')
const path = require('path')
const URL = require('url')
const data = require('./url.json')

http.createServer((res,req)=>{ 
    const {name,url,del} = URL.parse(req.url, true).query

    function writeFile(cb){
        
        fs.writeFile(path.join(__dirname,'url.json'),
        JSON.stringify(data,null,2),
        error =>{
            if(error) throw error

            cb(JSON.stringify({message:'ok'}))
        })
    }

    if(!name || !url) return res.end(JSON.stringify(data))

    if(del){
        data.urls = data.urls.filter(item => {String(item.url) !== String(url)})

        return writeFile(message => res.end(message))
    }
    data.urls.push({name,url})
    return writeFile(message =>res.end(message))

    }).listen(1300,()=> console.log('Api is running MAH BOY'))