/* http modules allows data to be transferred over the http protocol
create servers 
handle requests from client 
provide responses to those request  */



import http from 'node:http'

const PORT = 3000;

const server = http.createServer((req,res)=>{

    res.end("Response Ended Successfully!")
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})