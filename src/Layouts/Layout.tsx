
import { Outlet } from "react-router"
import Header from "../components/Header/Header"

const Layout = () => {
  return (
    <>
      <Header />
      
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
    </>
  )
}

export default Layout