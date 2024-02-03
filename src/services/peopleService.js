import {

    getAllPeoples,
    createPeople,
    delPeople
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
            throw new Error("not create people!!")

        }
    }
    delPeopleService = async (id) => {
        try {

            return await delPeople(id);

        } catch (error) {
            throw new Error("not create people!!")

        }

    }
}

export default new PeopleService