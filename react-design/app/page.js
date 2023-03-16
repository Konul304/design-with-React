"use client";
import "./css/main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from '@next/font/google'
import { useEffect } from "react";
import Layout from "./layout1";
import HomePage from "./homePage/page";

const inter = Inter({ subsets: ['latin'] })
// className={styles.main}
export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
    <Layout children={<HomePage/>}/>
    </>
  )
}
