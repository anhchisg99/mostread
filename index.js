import express from 'express'
const port = 3004
import route from './src/routes/index.js'
import bodyParser from 'body-parser'

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



app.get('/',(req,res)=>{
    res.send("success!!")
})
route(app)
app.listen(port,()=>{console.log(`listen in ${port}`)})