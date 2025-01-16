
import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router"
import { useAppStore } from "../../stores/useAppStore";

const Header = () => {

  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === '/', [pathname]);

  const { fetchCategories } = useAppStore();

 useEffect(() => {

   fetchCategories();

 }, [])
 

  return (

    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src='/img/logo.svg' alt="logotipo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold '}>
              Inicio</NavLink>
            <NavLink
              to='/favoritos'
              className={({ isActive }) =>
                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold '}>Favoritos</NavLink>
          </nav>
        </div>

        {isHome && (
          <form className="md:w-1/2 2xl:w-1/3 my-32 p-10 shadow bg-orange-600 rounded-xl space-y-6">
            <div className="space-y-4">
              <label
                className="bloack text-white uppercase font-extrabold text-lg"
                htmlFor="ingredient"> Nombre o Ingredientes
              </label>
              <input
                id='ingredient'
                type='text'
                name='ingredient'
                className="p-2 w-full rounded-lg focus:outline-none"
                placeholder="Ej. Vodka, Mojito, Café" />
            </div>
            <div className="space-y-4">
              <label
                className="bloack text-white uppercase font-extrabold text-lg"
                htmlFor="ingredient"> Categoria
              </label>
              <select
                id='ingredient'
                name='ingredient'
                className="p-2 w-full rounded-lg focus:outline-none"
              >
                <option value="">---Seleccione ---</option>
              </select>
            </div>
            <input
              className="cursor-pointer text-white uppercase font-extrabold w-full p-3 rounded-xl bg-orange-800 hover:bg-orange-200"
              type='submit'
              value='Buscar' />
          </form>
        )}
      </div>
    </header>
  )
}

export default Header