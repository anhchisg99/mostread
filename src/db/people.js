import pool from '../../config/index.js'

const getAllPeoples = async()=>{
    const {rows:peoples} = await pool.query(`select * from people`)
    return peoples
}

const createPeople = async({name,description,cateogry_id})=>{
    const {rows:people} = await pool.query(`insert into people(name,description,category_id) values($1,$2)`,[name,description,category_id])
    return people[0]
}

// const updatePeople = async({name,description,img,buy_link,book_id})=>{
//     const {rows:book} = await pool.query(`update book set name=$1, description=$2, img=$3, buy_link=$4 where book_id=$5`,[name,description,img,buy_link,book_id])
//     return book[0]

// }

const delPeople = async(id)=>{
    const {rows:people} = await pool.query(`delete from people where people_id=$1`,[id])
    return people[0]
}
export {
    getAllPeoples,
    createPeople,
    delPeople
}