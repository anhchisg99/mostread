import pool from '../../config/index.js'

const getAllCategories = async()=>{
    const {rows:categories} = await pool.query(`select * from category`)
    return categories
}

const createCategory = async({name})=>{
    const {rows:category} = await pool.query(`insert into category(name) values($1)`,[name])
    return category[0]
}

// const updatePeople = async({name,img,buy_link,book_id})=>{
//     const {rows:book} = await pool.query(`update book set name=$1,=$2, img=$3, buy_link=$4 where book_id=$5`,[name,img,buy_link,book_id])
//     return book[0]

// }

const delCategory = async(id)=>{
    const {rows:category} = await pool.query(`delete from category where category_id=$1`,[id])
    return category[0]
}
export {
    getAllCategories,
    createCategory,
    delCategory,
}