import pool from '../../config/index.js'


// review
const createReview = async({book_id,people_id,source})=>{
    const {rows:review} = await pool.query(`insert into review(book_id,people_id,source) values($1,$2,$3)`,[book_id,people_id,source])
    return review[0]
}
const getReview = async(people_id)=>{
    const {rows:reviews} = await pool.query(`select book_id,review from people inner join review on people.people_id = review.people_id where people.people_id=$1`,[people_id])
    return reviews
}
export {
    createReview,
    getReview
}