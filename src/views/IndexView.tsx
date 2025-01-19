import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/Header/DrinkCard";

const IndexView = () => {

  const { drinks } = useAppStore();

  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks])
  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasDrinks ?
        <div className="grid grid-cols1 md:grid-cols-2 2xl:grid-cols-4 my-10 gap-10">
          {drinks.drinks.map((drink) => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink} />
          ))}

        </div>
        :
        <p className="my-10 text-center text-2xl">
          Busque en el formulario arriba para encontrar bebidas y recetas.
        </p>
      }
    </>
  )
}

export default IndexView