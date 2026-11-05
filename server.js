import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs'

const PORT = 8000

const __dirname = import.meta.dirname


const server = http.createServer((req,res) =>{
    const pathToResource =path.join(__dirname, 'index.html')
    const content = fs.readFileSync(pathToResource, 'ut5*')

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<html><h1> The server is working </h1></html>')
})

server.listen(PORT, () => console.log(`This is from the server ${PORT}`))