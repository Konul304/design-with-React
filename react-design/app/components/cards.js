import '../css/cards.css'
import Image from 'next/image'
import img from '../../public/images/cardImg.svg'
import img2 from '../../public/images/cardImg2.svg'

export default function Card() {
    return (
        <>
            <div className="d-flex cards justify-content-start alignt-items-center mt-3">
                <div className="card me-3 p-3 ">
                    <div className="d-flex justify-content-between">
                        <p className="me-5">Sazişlər</p>
                        <small>Yanvar</small>
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex flex-column '>
                            <Image className='me-3'
                                src={img}
                                alt="Picture of the author"
                            />
                            <Image className='me-3 second'
                                src={img}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='textDiv'>
                            <div>
                                <span>Gözləmədə</span>
                                <p>8%</p>
                            </div>
                            <hr></hr>
                            <div>
                                <span>İcra edildi</span>
                                <p>92%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card me-3 p-3">
                    <div className="d-flex justify-content-between">
                        <strong className="me-5">Reqreslər</strong>
                        <small>Yanvar</small>
                    </div>
                    <div className='d-flex mt-3'>
                        <div className='d-flex flex-column '>
                            <Image className='me-3'
                                src={img}
                                alt="Picture of the author"
                            />
                            <Image className='me-3  second'
                                src={img}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='textDiv'>
                            <div>
                                <span>Gözləmədə</span>
                                <p>46%</p>
                            </div>
                            <hr></hr>
                            <div>
                                <span>İcra edildi</span>
                                <p>54%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card p-3">
                    <div className="d-flex justify-content-between">
                        <strong className="me-5"> Zaminli portfel</strong>
                        <small>Yanvar</small>
                    </div>
                    <div className='d-flex mt-3'>
                        <div className='d-flex flex-column '>
                            <Image className='me-3'
                                src={img2}
                                alt="Picture of the author"
                            />
                            <Image className='me-3 second'
                                src={img}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='textDiv'>
                            <div>
                                <span>Gecikməli</span>
                                <p>20%</p>
                            </div>
                            <hr></hr>
                            <div>
                                <span>Ödəyir</span>
                                <p>80%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}