
import { StateCreator } from "zustand";

import { getCategories, getDetailsById, getRecipes } from "../services/RecipeServices";
import { Categories, DetailsRecipe, Drink, Drinks, SearchFilter } from "../types";


export type RecipiesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: DetailsRecipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
};

export const createRecipesSlice: StateCreator<RecipiesSliceType> = (set) => ({
    categories: {
        drinks: [],
    },

    drinks: {
        drinks: []
    },

    selectedRecipe: {} as DetailsRecipe,

    modal: false,

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
    },

    selectRecipe: async (id) => {

        const selectedRecipe = await getDetailsById(id);
        set(() => ({
            selectedRecipe,
            modal: true
        }))
    },

    closeModal: () => {
        set(() => ({
            modal: false,
            selectedRecipe: {} as DetailsRecipe
        }))
    }

})