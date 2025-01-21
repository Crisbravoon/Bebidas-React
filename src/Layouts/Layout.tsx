
import { Outlet } from "react-router"
import Header from "../components/Header/Header"
import Modal from "../components/Drink/Modal"

const Layout = () => {
  return (
    <>
      <Header />
      
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <Modal/>
    </>
  )
}

export default Layout