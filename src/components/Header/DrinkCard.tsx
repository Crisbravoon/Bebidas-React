import { Drink } from "../../types"


type DrinkCardProps = {
    drink: Drink
};

const DrinkCard = ({ drink }: DrinkCardProps) => {
    return (
        <div className="border shadow-lg">
            <div className="overflow-hidden">
                <img
                    className="hover:scale-90 transition-transform"
                    src={drink.strDrinkThumb}
                    alt={`imgen de ${drink.strDrink}`} />
            </div>
            <div className="p-5">

                <h2 className="text-2xl truncate font-black">
                    {drink.strDrink}
                </h2>
                <button
                    type='button'
                    className="rounded-2xl bg-orange-600 hover:bg-orange-400 mt-5 w-full p-3 font-bold text-white text-lg">
                    Ver Receta
                </button>
            </div>
        </div>
    )
}

export default DrinkCard