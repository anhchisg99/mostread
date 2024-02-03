import {
    getAllBooks,
    mostBooks,
} from "../controllers/bookCtrl.js";
import express from 'express'
const bookRouter = express.Router()

// bookRouter.get('/',(req,res)=>{

//     res.send('success!!')
// })
bookRouter.get('/', getAllBooks)
bookRouter.get('/most-books', mostBooks)
export default bookRouter