import {  getAllCategories} from "../controllers/categoryCtrl.js";
import express from 'express'
const categoryRouter = express.Router()

categoryRouter.get('/',getAllCategories)
export default categoryRouter