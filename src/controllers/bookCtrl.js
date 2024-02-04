
import bookService from "../services/bookService.js";

const getAllBooks = async(req,res)=>{
    const results = await bookService.getAllBooksService()
    res.status(201).json(results)
}
const mostBooks = async(req,res)=>{
    const results = await bookService.mostBooksService()
    res.status(201).json(results)

}
const updateBook = async(req,res)=>{
    // const {name,author}
    const results = await bookService.updateBookService(req.body)
    res.status(201).json(results)

}
const createBook = async(req,res)=>{

    const {name,description,author} = req.body
    // console.log(req.file)
    let img = req.file.path
    const results = await bookService.createBookService({name,description,author,img})
    res.status(201).json({
        status:"success"
    })

}
export {
    getAllBooks,
    mostBooks,
    createBook,
    updateBook,
}