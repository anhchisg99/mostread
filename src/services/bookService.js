import {
    getAllBooks,
    createBook,
    updateBook,
    delBook,
    mostBooks,
} from "../db/book.js";

class BookService {
    createBookService = async (book) => {
        try {

            return await createBook(book);
        } catch (error) {
            throw new Error("not create book!!")
        }
    }
    getAllBooksService = async () => {
        try {

            return await getAllBooks();

        } catch (error) {
            throw new Error("not create book!!")

        }
    }
    updateBookService = async (book) => {
        try {

            return await updateBook(book);

        } catch (error) {
            throw new Error("not create book!!")

        }

    }
    delBookService = async (id) => {
        try {

            return await delBook(id);

        } catch (error) {
            throw new Error("not create book!!")

        }

    }
    mostBooksService =async()=>{
        try {
            
            return await mostBooks();
        } catch (error) {
            throw new Error("not create book!!")
            
        }
    }
}
export default new BookService