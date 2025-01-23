
import { StateCreator } from 'zustand';

import { createNotificationSlice, NotificationSliceType } from './notificationSlice';
import { DetailsRecipe } from '../types';

export type favoriteSliceType = {
    favorites: DetailsRecipe[]
    handleClickFavorite: (recipe: DetailsRecipe) => void
    favoritesExists: (id: DetailsRecipe['idDrink']) => boolean
    loadFromStorage: () => void
};

export const createFavoriteSlice: StateCreator<favoriteSliceType & NotificationSliceType, [], [], favoriteSliceType> = (set, get, api) => ({

    favorites: [],

    handleClickFavorite: (recipe) => {

        set((state) => ({
            //Valida la existencia de la receta en favoritos
            favorites: get().favorites.some(fav => fav.idDrink === recipe.idDrink)
                ? (
                    createNotificationSlice(set, get, api).showNotification({
                        text: 'Se eliminó de favoritos',
                        error: false
                    }),
                    state.favorites.filter(fav => fav.idDrink !== recipe.idDrink)
                )
                : (
                    createNotificationSlice(set, get, api).showNotification({
                        text: 'Se agregó a favoritos',
                        error: false
                    }),
                    [...state.favorites, recipe]
                )
        }));

        localStorage.setItem('favorites', JSON.stringify(get().favorites));
    },


    //Existe en el state?
    favoritesExists: (id) => {
        return get().favorites.some(fav => fav.idDrink === id);
    },

    loadFromStorage: () => {

        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        set(() => ({
            favorites: storedFavorites
        }));
    }

});



