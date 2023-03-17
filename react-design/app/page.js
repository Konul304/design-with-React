"use client";
import "./css/main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Roboto } from '@next/font/google'
import { useEffect } from "react";
import Layout from "./layout1";
import HomePage from "./homePage/page";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})
// className={styles.main}
export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
    <Layout className={roboto.className}>
      <HomePage />
    </Layout>
      {/* <Layout className={roboto.className} children={<HomePage />} /> */}
    </>
  )
}
