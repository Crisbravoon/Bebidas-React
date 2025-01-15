
import { BrowserRouter, Route, Routes } from "react-router"

import FavoritesView from "../views/FavoritesView"
import IndexView from "../views/IndexView"
import Layout from "../Layouts/Layout"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path='/' index element={<IndexView />} />
                    <Route path='/favoritos' element={<FavoritesView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter