
import bookService from "../services/bookService.js";

const getAllBooks = async(req,res)=>{
    const results = await bookService.getAllBooksService()
    res.status(201).json(results)
}

export {
    getAllBooks
}