import express from "express"
import todoRouter from "./todo.router.mjs"
const app=express();
const port =3000;
 app.get("/",(req,res)=>{
    res.send("Server is up!")
 })

 app.use("/todo",todoRouter)
 app.listen(port,()=>{
    console.log(`server started on port:${port}`)
 })
