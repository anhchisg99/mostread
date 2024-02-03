import { getReview,createReview } from "../controllers/reviewCtrl.js";
import express from 'express'
const reviewRouter = express.Router()

// reviewRouter.get('/',(req,res)=>{

//     res.send('success!!')
// })
reviewRouter.get('/:people_id',getReview)
reviewRouter.post('/',createReview)
export default reviewRouter