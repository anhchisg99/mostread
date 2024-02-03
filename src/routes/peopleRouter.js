import { 
    getAllPeoples,
    updatePeople,
    mostExperts,
    filterPeople,
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
export default peopleRouter