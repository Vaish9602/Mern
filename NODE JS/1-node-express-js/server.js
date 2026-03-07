
const http= require("node:http");
const host ="localhost";
const port=3000;
const server=http.createServer((req,res)=>{
    const { url, method }=req;
    if(url==="/" &&  method=== "GET"){
        res.write("hello ,welcome to node js");
        res.write("this is another line")
        res.end();
    }

})
server.listen(port,host,()=>{
    console.log(`server is running ${host} : ${port}`)

})