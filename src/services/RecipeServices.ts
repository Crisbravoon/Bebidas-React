
import axios from "axios";

import { CategoryAPISchema, DetailsAPISchema, DrinksAPISchema } from "../schemas/recipies-schemas";
import { Drink, SearchFilter } from "../types";

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
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.category}&i=${search.ingredient}`;
        const { data } = await axios.get(url);
        const result = DrinksAPISchema.safeParse(data);

        if (result.success) {
            return result.data;
        }
    } catch (error) {
        throw new Error('Error al obtener las recetas');
    }
};

export const getDetailsById = async (id: Drink['idDrink']) => {

    try {

        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        const { data } = await axios.get(url);
        const result = DetailsAPISchema.safeParse(data.drinks[0]);

        if (result.success) {
            return result.data;
        }

    } catch (error) {
        throw new Error('Error al obtener la receta detallada');
    }

}