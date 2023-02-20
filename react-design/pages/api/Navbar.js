import './nav.css'
import Image from 'next/image'
import notification from '../../public/notification.svg'
import calendar from "../../public/calendar.svg"
import messages from "../../public/mssgs.svg"

export default function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar d-flex">
                    <h5 className='ps-4'><b>Müştəri</b></h5>
                    <div >
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

                    </div>

                </nav>
            </div>
        </>
    )
}