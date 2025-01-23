
import { useMemo } from "react";

import DrinkCard from "../components/Drink/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

const FavoritesView = () => {

  const { favorites } = useAppStore();

  const hasFavorites = useMemo(() => favorites.length > 0, [favorites]);

  return (
    <>
      <h1 className=" p-3 text-orange-600 text-6xl font-extrabold">Favoritos</h1>
      {hasFavorites ?
        <div className="p-6 grid grid-cols1 md:grid-cols-2 2xl:grid-cols-4 my-10 gap-10">
          {favorites.map(drink => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
            />
          ))}
        </div>
        :
        <p className="my-10 text-center text-2xl">No tienes favoritos agregados...</p>
      }
    </>
  )
}

export default FavoritesView