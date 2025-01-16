
import { z } from "zod";

import { CategoryAPISchema } from "../schemas/recipies-schemas";


export type Categories = z.infer<typeof CategoryAPISchema>;