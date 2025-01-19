
import { devtools } from "zustand/middleware";
import { create } from "zustand";

import { createRecipesSlice, RecipiesSliceType } from "./recipeSlice";


export const useAppStore = create<RecipiesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})));
