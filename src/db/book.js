import pool from '../../config/index.js'

const getAllBooks = async()=>{
    const {rows:books} = await pool.query(`select * from book`)
    return books
}

const createBook = async({name,description,author,img})=>{
    const {rows:book} = await pool.query(`insert into book(name,description,author,img) values($1,$2,$3,$4)`,[name,description,author,img])
    return book[0]
}

const updateBook = async({name,author,description,img,buy_link,book_id})=>{
    const {rows:book} = await pool.query(`update book set name=$1, author=$2,description=$3, img=$4, buy_link=$5 where book_id=$6`,[name,author,description,img,buy_link,book_id])
    return book[0]

}

const delBook = async(id)=>{
    const {rows:book} = await pool.query(`delete from book where book_id=$1`,[id])
    return book[0]
}
const mostBooks = async()=>{
    const {rows:books} = await pool.query(`select book.name, book.book_id, count(review) from book inner join review on book.book_id = review.book_id group by book.book_id order by count(review) desc limit 4`)
    return books
}

export {
    getAllBooks,
    createBook,
    updateBook,
    delBook,
    mostBooks,
}