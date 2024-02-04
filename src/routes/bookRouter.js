import {
    getAllBooks,
    mostBooks,
    createBook,
    updateBook,
} from "../controllers/bookCtrl.js";
import express from 'express'
const bookRouter = express.Router()
import upload from '../utils/fileUpload.js'
// bookRouter.get('/',(req,res)=>{

//     res.send('success!!')
// })
bookRouter.get('/', getAllBooks)
bookRouter.post('/', getAllBooks)
bookRouter.post('/create-book',upload.single("file"), createBook)
bookRouter.get('/most-books', mostBooks)
bookRouter.put('/update', updateBook)
export default bookRouter