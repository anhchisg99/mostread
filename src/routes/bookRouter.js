import { getAllBooks } from "../controllers/bookCtrl.js";
import express from 'express'
const bookRouter = express.Router()

// bookRouter.get('/',(req,res)=>{

//     res.send('success!!')
// })
bookRouter.get('/',getAllBooks)
export default bookRouter