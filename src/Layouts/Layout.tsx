
import { Outlet } from "react-router";
import { useEffect } from "react";

import Notification from "../components/Notification";
import { useAppStore } from "../stores/useAppStore";
import Header from "../components/Header/Header";
import Modal from "../components/Drink/Modal";

const Layout = () => {

  const { loadFromStorage, notification } = useAppStore();

  useEffect(() => {
    loadFromStorage();
  }, [])


  return (
    <>
      <Header />

      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <Modal />
      <Notification/>
    </>
  )
}

export default Layout