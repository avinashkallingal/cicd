const express=require("express")

const app=express()

app.get('/',(req,res)=>{

    res.send("hii i am avinash a")
    console.log("this is server")
    console.log("chnge")
})

app.listen(3333,()=>{
    console.log("running in port 3333")
})