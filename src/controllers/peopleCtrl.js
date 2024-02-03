
import peopleService from "../services/peopleService.js";

const getAllPeoples = async (req, res) => {
    const results = await peopleService.getAllPeoplesService()
    res.status(201).json(results)
}
const updatePeople = async (req, res) => {
    // const {people_id,name,img,description,category_id}  = req.body
    await peopleService.updatePeople(req.body)
    res.status(201).json({
        status: "success"
    })
}

const mostExperts = async (req, res) => {
    const experts = await peopleService.mostExpertsService()
    res.status(201).json({
        experts,
        status: "success"
    })
}
const filterPeople = async (req, res) => {
    const {category_id} = req.params
    console.log(`category: ${category_id}`)
    const peoples = await peopleService.filterPeopleService(category_id)
    res.status(201).json({
        peoples,
        status: "success"
    })

}

export {
    getAllPeoples,
    updatePeople,
    mostExperts,
    filterPeople,
}