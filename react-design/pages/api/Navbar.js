import "./css/nav.css"

import Image from 'next/image'
import notification from '../../public/notification.svg'
import calendar from "../../public/calendar.svg"
import messages from "../../public/mssgs.svg"
import profile from "../../public/profile.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar d-flex">
                    <h5 className='ps-4'><b>Müştəri</b></h5>
                    <div  className='d-flex'>
                        <button className='btn'>
                            <Image className="mt-2 mb-3"
                                src={notification}
                                alt="Picture of the author"
                                width="34px"
                                height="34px"
                            /></button>
                        <button className='btn'>
                            <Image className="mt-2 mb-3"
                                src={calendar}
                                alt="Picture of the author"
                                width="34px"
                                height="34px"
                            /></button>
                        <button className='btn'>
                            <Image className="mt-2 mb-3 "
                                src={messages}
                                alt="Picture of the author"
                                width="34px"
                                height="34px"
                            /></button>
                        <div className='profile d-flex align-items-center me-3'>
                            <div >
                                <p>Partnyor adı</p>
                                <p>Hesabım</p>
                            </div>
                            <Image className="mt-2 mb-3 "
                                src={profile}
                                alt="Picture of the author"
                                width="34px"
                                height="34px"
                            />
                            <FontAwesomeIcon icon={faCaretDown} className="ms-4" />
                        </div>
                    </div>

                </nav>
            </div>
        </>
    )
}