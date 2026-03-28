const { isUtf8 } = require('buffer');
const fs = require('fs');
const http = require('http')

const server = http.createServer((req, res) => {

    const loggerTime = new Date().toISOString()
    const loggerTimUtc =new Date().toUTCString()

    
    
    if (req.url == '/favicon.ico') return null
    switch (req.url) {
        case "/about":
            fs.appendFile("./log.txt",`User visited ${loggerTime} - ${loggerTimUtc} - ${req.url}\n`,(err)=>{
                if (err) console.error(err);
                res.end('User has hit the about url');
            })
            break;
        case "/":
          fs.appendFile("./log.txt",`User visited ${loggerTime} - ${req.url}\n`,(err)=>{
                if (err) console.error(err);
                res.end('User has hit the Home url');
            })
            break;
        default:
             fs.appendFile("./log.txt",`User visited ${loggerTime} - ${req.url}\n`,(err)=>{
                if (err) console.error(err);
                res.end('User has hit the notfound url');
            })

    }

})

// console.log('fs', fs)
// console.log('http', http)

server.listen(3000, () => {
    fs.appendFile('./log.txt',`Server Restart - ${new Date().toString()} - ${new Date().toUTCString()} \n`,(err)=>{
        // console.log(err,'err')
        if(err) return null
        console.log("server started")
    })
}) 