import { Inter } from '@next/font/google'
import SideMenu from '@/pages/api/sideMenu'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '@/pages/api/Navbar';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


const inter = Inter({ subsets: ['latin'] })
// className={styles.main}
export default function Home() {
  return (
    <>
      <main>
          <SideMenu />
          <Navbar/>
      </main>
    </>
  )
}
