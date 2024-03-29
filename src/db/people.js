import pool from '../../config/index.js'

const getAllPeoples = async()=>{
    // const {rows:peoples} = await pool.query(`select * from people`)
    const {rows:peoples} = await pool.query(`select people.name,people.people_id,count(source) from people inner join review on people.people_id = review.people_id group by people.people_id`)
    return peoples
}

const createPeople = async({name,description,cateogry_id})=>{
    const {rows:people} = await pool.query(`insert into people(name,description,category_id) values($1,$2)`,[name,description,category_id])
    return people[0]
}

const updatePeople = async({people_id,name,img,description,category_id})=>{
    const {rows:people} = await pool.query(`update people set name=$1, img=$2, description=$3, category_id=$4 where people_id=$5`,[name,img,description,category_id,people_id])
    return people[0]

}
const getPeople = async(people_id) =>{
    const {rows:product}  = await pool.query(`select * from people where people_id=$1`,[people_id])
    return product[0]
}
const delPeople = async(id)=>{
    const {rows:people} = await pool.query(`delete from people where people_id=$1`,[id])
    return people[0]
}
const mostExperts = async()=>{
    const {rows:peoples} = await pool.query(`select people.name,people.people_id,count(source) from people inner join review on people.people_id = review.people_id group by people.people_id limit 4`)
    return peoples
}
const filterCareer = async(category_id)=>{
    const {rows:peoples} = await pool.query(`select * from people where category_id=$1`,[category_id])
    return peoples
}
const bookRecommendByPeople = async(people_id)=>{
    const { rows:books} = await pool.query(`select book.img,book.name,source from people inner join review on people.people_id = review.people_id inner join book on book.book_id = review.book_id where people.people_id=$1`,[people_id])
    return books
}
export {
    getAllPeoples,
    createPeople,
    delPeople,
    getPeople,
    updatePeople,
    mostExperts,
    bookRecommendByPeople,
    filterCareer as filterPeople,
}