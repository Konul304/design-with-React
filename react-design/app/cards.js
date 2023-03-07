import './css/cards.css'
import Image from 'next/image'
import img from '../public/images/cardImg.svg'
import img2 from '../public/images/cardImg2.svg'

export default function Card() {
    return (
        <>
            <div className="d-flex cards justify-content-start alignt-items-center mt-5">
                <div className="card me-3 p-3 ">
                    <div className="d-flex justify-content-between">
                        <p className="me-5">Sazişlər</p>
                        <small>Yanvar</small>
                    </div>
                    <div className='d-flex'>
                        <Image className='story me-3'
                            src={img}
                            alt="Picture of the author"
                        />
                        <div>
                            <span>Gözləmədə</span>
                            <p>8%</p>
                        </div>
                    </div>
                    <div className='d-flex mt-3'>
                        <Image className='story me-3'
                            src={img}
                            alt="Picture of the author"
                        />
                        <div>
                            <span>İcra edildi</span>
                            <p>92%</p>
                        </div>
                    </div>
                    <div className='d-flex'></div>
                </div>
                <div className="card me-3 p-3">
                    <div className="d-flex justify-content-between">
                        <strong className="me-5">Reqreslər</strong>
                        <small>Yanvar</small>
                    </div>
                    <div className='d-flex mt-3'>
                        <Image className='story me-3'
                            src={img}
                            alt="Picture of the author"
                        />
                        <div>
                            <span>Gözləmədə</span>
                            <p>46%</p>
                        </div>
                    </div>
                    <div className='d-flex mt-3'>
                        <Image className='story me-3'
                            src={img}
                            alt="Picture of the author"
                        />
                        <div>
                            <span>İcra edildi</span>
                            <p>54%</p>
                        </div>
                    </div>
                </div>
                <div className="card p-3">
                    <div className="d-flex justify-content-between">
                        <strong className="me-5"> Zaminli portfel</strong>
                        <small>Yanvar</small>
                    </div>
                    <div className='d-flex mt-3'>
                        <Image className='story me-3'
                            src={img2}
                            alt="Picture of the author"
                        />
                        <div>
                            <span>Gecikməli</span>
                            <p>20%</p>
                        </div>
                    </div>
                    <div className='d-flex mt-3'>
                        <Image className='story me-3'
                            src={img}
                            alt="Picture of the author"
                        />
                        <div>
                            <span>Ödəyir</span>
                            <p>80%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}