import pool from '../../config/index.js'

const getAllCategories = async()=>{
    const {rows:categories} = await pool.query(`select name from category`)
    return categories
}

const createCategory = async({name})=>{
    const {rows:category} = await pool.query(`insert into category(name) values($1)`,[name])
    return category[0]
}



const delCategory = async(id)=>{
    const {rows:category} = await pool.query(`delete from category where category_id=$1`,[id])
    return category[0]
}

export {
    getAllCategories,
    createCategory,
    delCategory,
}