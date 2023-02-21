"use client";
import { Inter } from '@next/font/google'
import SideMenu from '@/pages/api/sideMenu'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '@/pages/api/Navbar';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react";
import Body from '@/pages/api/body';



const inter = Inter({ subsets: ['latin'] })
// className={styles.main}
export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <main>
          <SideMenu />
          <Navbar/>
          <Body/>
      </main>
    </>
  )
}
