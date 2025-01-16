
import axios from "axios";
import { CategoryAPISchema } from "../schemas/recipies-schemas";

export const getCategories = async () => {

    try {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        const { data} = await axios.get(url);
        const result = CategoryAPISchema.safeParse(data);
        console.log(result.data);

        if (result.success) {
            return result.data;
        }
    } catch (error) {

    }

}