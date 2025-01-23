
import { useMemo } from "react";

import DrinkCard from "../components/Drink/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

const IndexView = () => {

  const { drinks } = useAppStore();

  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks]);

  return (
    <>
      <h1 className="p-3 text-orange-600 text-6xl font-extrabold">Recetas</h1>
      {hasDrinks ?
        <div className="p-6 grid grid-cols1 md:grid-cols-2 2xl:grid-cols-4 my-10 gap-10">
          {drinks.drinks.map((drink) => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink} />
          ))}
        </div>
        :
        <p className="my-10 text-center text-2xl">
          Busque en el formulario de arriba para encontrar bebidas y recetas.
        </p>
      }
    </>
  )
}

export default IndexView