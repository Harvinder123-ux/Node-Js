import http from "http"
const port = process.env.PORT || 3000;

const app = http.createServer((req, res)=> {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html')
 res.end("<h1>Hello This Is Harvinder</h1>")
 console.log(req)
 console.log(req.url)
})

app.listen(port , ()=> {
    console.log(`Server listening at the port ${port}`)
})