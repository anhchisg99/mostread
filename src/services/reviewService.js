import {
    createReview,
    getReview
} from "../db/review.js";

class ReviewService {
    createReviewSerivce = async (data) => {
        try {
            console.log(data)
            return await createReview(data);
        } catch (error) {
            throw new Error("not create review!!")

        }
    }
    getReviewService = async (people_id) => {
        try {
            console.log(people_id)
            return await getReview(people_id)
        } catch (error) {
            throw new Error("not get review!!")

        }
    }

}
export default new ReviewService