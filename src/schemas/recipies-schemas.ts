
import { z } from "zod";


export const CategoryAPISchema = z.object({
    drinks: z.array(z.object({
        strCategory: z.string(),
    }))
});

export const SearchSchema = z.object({
    ingredient: z.string(),
    category: z.string(),
});

export const DrinkAPISchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
});

export const DrinksAPISchema = z.object({
    drinks: z.array(DrinkAPISchema)
});