
import peopleService from "../services/peopleService.js";

const getAllPeoples = async(req,res)=>{
    const results = await peopleService.getAllPeoplesService()
    res.status(201).json(results)
}

export {
    getAllPeoples
}