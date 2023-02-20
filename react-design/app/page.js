import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import SideMenu from '@/pages/api/sideMenu'
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <SideMenu />
      </main>
    </>
  )
}
