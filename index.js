import express from 'express'
const port = 3004
import route from './src/routes/index.js'



const app = express()


app.get('/',(req,res)=>{
    res.send("success!!")
})
route(app)
app.listen(port,()=>{console.log(`listen in ${port}`)})