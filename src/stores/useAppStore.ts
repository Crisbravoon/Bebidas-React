
import { devtools } from "zustand/middleware";
import { create } from "zustand";

import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";
import { createFavoriteSlice, favoriteSliceType } from "./favoritesSlice";
import { createRecipesSlice, RecipiesSliceType, } from "./recipeSlice";


export const useAppStore = create<RecipiesSliceType & favoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})));
