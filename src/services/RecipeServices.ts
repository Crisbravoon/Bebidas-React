
import axios from "axios";

import { CategoryAPISchema, DrinksAPISchema } from "../schemas/recipies-schemas";
import { SearchFilter } from "../types";

export const getCategories = async () => {
    try {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        const { data } = await axios.get(url);
        const result = CategoryAPISchema.safeParse(data);

        if (result.success) {
            return result.data;
        }
    } catch (error) {
        throw new Error('Error al obtener las categorías');
    }
};

export const getRecipes = async (search: SearchFilter) => {

    try {
        const url = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.category}&i=${search.ingredient}`;
        const {data} = await axios.get(url);
        const result  = DrinksAPISchema.safeParse(data);

        console.log(result)
        if(result.success) {
            return result.data;
        }
    } catch (error) {
        throw new Error('Error al obtener las recetas');
    }

};