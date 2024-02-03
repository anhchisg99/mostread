import { getAllPeoples } from "../controllers/peopleCtrl.js";
import express from 'express'
const peopleRouter = express.Router()

// peopleRouter.get('/',(req,res)=>{

//     res.send('success!!')
// })
peopleRouter.get('/',getAllPeoples)
export default peopleRouter