import { 
    getAllPeoples,
    updatePeople,
    mostExperts,
    filterPeople,
    getPeople,
    bookRecommendByPeople,
 } from "../controllers/peopleCtrl.js";
import express from 'express'
const peopleRouter = express.Router()

// peopleRouter.get('/',(req,res)=>{

//     res.send('success!!')
// })
peopleRouter.get('/',getAllPeoples)
peopleRouter.put('/update',updatePeople)
peopleRouter.get('/most-experts',mostExperts)
peopleRouter.get('/:category_id',filterPeople)
peopleRouter.get('/bio/:people_id',getPeople)
peopleRouter.get('/books/:people_id',bookRecommendByPeople)
export default peopleRouter 