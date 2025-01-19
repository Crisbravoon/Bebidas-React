
import { StateCreator } from "zustand";

import { getCategories, getRecipes } from "../services/RecipeServices";
import { Categories, Drinks, SearchFilter } from "../types";


export type RecipiesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilter: SearchFilter) => Promise<void>
};

export const createRecipesSlice: StateCreator<RecipiesSliceType> = (set) => ({
    categories: {
        drinks: [],
    },

    drinks: {
        drinks: []
    },

    fetchCategories: async () => {
        const categories = await getCategories();
        set(() => ({
            categories
        }))
    },

    searchRecipes: async (search) => {
        const drinks = await getRecipes(search);
        set(() => ({
            drinks
        }))
    }
})