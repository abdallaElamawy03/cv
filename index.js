const express = require("express")
const {randommathal,randomten}=require("./handler")
// require("@testing-library/user-event/dist/type")
const app = express()

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    next()
})
app.get("/amthal/random",(req,res)=>{
    res.json(randommathal());
})
app.get("/amthal/ten",(req,res)=>{
    res.json(randomten());
})
app.use((err,req,res,next)=>{
    const statuscode=err.statuscode || 500 ;
    res.statuscode(statuscode).json({
        type:"error",
        message:err.message
    })
})
const port = process.env.port||3005;
app.listen(port,()=>{
    console.log("server is started in port" + port)
})
