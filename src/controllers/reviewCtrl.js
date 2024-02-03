
import reviewService from "../services/reviewService.js";

const getReview = async(req,res)=>{
    const {people_id} = req.params
    // console.log(`review ${people_id}`)
    const results = await reviewService.getReviewService(people_id)
    res.status(201).json(results)
}
const createReview = async(req,res)=>{
    // const {people_id,name,img,description,category_id}  = req.body
    // const {people_id} = req.params
    // console.log(`review ${people_id}`)
    const results = await reviewService.createReviewSerivce(req.body)
    res.status(201).json({
        status:"success",
        results
    })
}


export {
    createReview,
    getReview,
    
}