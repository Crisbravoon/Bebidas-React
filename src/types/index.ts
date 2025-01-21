
import { z } from "zod";

import { CategoryAPISchema, DetailsAPISchema, DrinkAPISchema, DrinksAPISchema, SearchSchema } from "../schemas/recipies-schemas";


export type Categories = z.infer<typeof CategoryAPISchema>;
export type SearchFilter = z.infer<typeof SearchSchema>;
export type Drinks = z.infer<typeof DrinksAPISchema>;
export type Drink = z.infer<typeof DrinkAPISchema>;
export type DetailsRecipe = z.infer<typeof DetailsAPISchema>;