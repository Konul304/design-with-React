import './globals.css'
import Navbar from '@/app/components/Navbar.js'
import SideMenu from '@/app/components/sideMenu'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div id='bg-blur'></div>
        <Navbar/>
        <SideMenu />
        <div>{children}</div>
      </body>
    </html>
  )
}
