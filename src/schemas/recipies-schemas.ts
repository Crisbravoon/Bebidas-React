
import { z } from "zod";


export const CategoryAPISchema = z.object({
    drinks: z.array(z.object({
        strCategory: z.string(),
    }))
});