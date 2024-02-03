import {
   getAllCategories,
   createCategory,
   delCategory
} from "../db/category.js";

class CategoryService {
    createCategoryService = async (category) => {
        try {

            return await createCategory(category);
        } catch (error) {
            throw new Error("not create category!!")
        }
    }
    getAllCategoriesService = async () => {
        try {

            return await getAllCategories();

        } catch (error) {
            throw new Error("not create category!!")

        }
    }
    // updateBookService = async (book) => {
    //     try {

    //         return await updateBook(book);

    //     } catch (error) {
    //         throw new Error("not create book!!")

    //     }

    // }
    delCategoryService = async (id) => {
        try {

            return await delCategory(id);

        } catch (error) {
            throw new Error("not create book!!")

        }

    }
}
export default new CategoryService