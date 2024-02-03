
import categoryService from "../services/categoryService.js";

const getAllCategories = async(req,res)=>{
    const results = await categoryService.getAllCategoriesService()
    res.status(201).json(results)
}

export {
    getAllCategories
}