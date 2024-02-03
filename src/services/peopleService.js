import {

    getAllPeoples,
    createPeople,
    delPeople,
    getPeople,
    updatePeople,
    mostExperts,
    filterPeople,
    bookRecommendByPeople,
} from "../db/people.js";

class PeopleService {
    createPeopleService = async (people) => {
        try {

            return await createPeople(people);
        } catch (error) {
            throw new Error("not create people!!")
        }
    }
    getAllPeoplesService = async () => {
        try {

            return await getAllPeoples();

        } catch (error) {
            throw new Error("not get  people!!")

        }
    }
    getPeopleService = async (people_id) => {
        try {

            return await getPeople(people_id);
        } catch (error) {
            throw new Error("not get  people!!")

        }
    }
    delPeopleService = async (id) => {
        try {

            return await delPeople(id);

        } catch (error) {
            throw new Error("not del people!!")

        }

    }
    updatePeople = async (data) => {
        try {
            const peopleFound = await getPeople(data.people_id);
            if (!peopleFound) {
                throw new Error("people not found")

            }
            return await updatePeople(data)
        } catch (error) {
            throw new Error("not update people!!")

        }
    }
    mostExpertsService = async () => {
        try {

            return await mostExperts()
        } catch (error) {
            throw new Error("not update people!!")

        }
    }
    filterPeopleService = async (category_id) => {
        try {
            console.log(`service: ${category_id}`)
            return await filterPeople(category_id)
        } catch (error) {
            throw new Error("not update people!!")

        }
    }
    bookRecommendByPeopleService = async (people_id) => {
        try {
            // console.log(`service: ${people_id}`)
            return await bookRecommendByPeople(people_id)
        } catch (error) {
            throw new Error("not book recommend !!")

        }
    }
}

export default new PeopleService