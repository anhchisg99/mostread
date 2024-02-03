import pool from '../../config/index.js'

const getAllBooks = async()=>{
    const {rows:books} = await pool.query(`select * from book`)
    return books
}

const createBook = async({name,description})=>{
    const {rows:book} = await pool.query(`insert into book(name,description) values($1,$2)`,[name,description])
    return book[0]
}

const updateBook = async({name,description,img,buy_link,book_id})=>{
    const {rows:book} = await pool.query(`update book set name=$1, description=$2, img=$3, buy_link=$4 where book_id=$5`,[name,description,img,buy_link,book_id])
    return book[0]

}

const delBook = async(id)=>{
    const {rows:book} = await pool.query(`delete from book where book_id=$1`,[id])
    return book[0]
}

export {
    getAllBooks,
    createBook,
    updateBook,
    delBook
}