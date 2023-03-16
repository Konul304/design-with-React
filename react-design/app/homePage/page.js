'use client';
import '../css/homePage.css'
import Image from 'next/image'
import ellipse1 from '../../public/images/Ellipse1.svg'
import ellipse2 from '../../public/images/ellipse2.svg'
import ellipse3 from '../../public/images/ellipse3.svg'
import ellipse4 from '../../public/images/ellipse4.svg'
import circle from '../../public/images/circle.svg'
import fb from '../../public/images/fb.svg'
import wp from '../../public/images/wp.svg'
import insta from '../../public/images/insta.svg'
import map from '../../public/images/map.svg'
import web from '../../public/images/web.svg'
import phone from '../../public/images/phone.svg'
import mail from '../../public/images/mail.svg'
import cfLogo from '../../public/images/cfLogo.svg'
import Card from '../components/cards';
import ChartComponent from '../components/chart';
import Story from '../components/story';

export default function HomePage() {
   
    return (
        <>
            <div className='d-flex justify-content-start container'>
                <div className="container1">
                    <h5 className='mt-3'><b>Yeniliklər</b></h5>
                    <div className='storyDiv mb-3 mt-2'>
                        <Story/>
                    </div>
                    <div className='chartDiv'>
                        <div className='chartTitle'>Dövriyyə</div>
                        <div className='d-flex align-items-baseline'>
                            <div className='mb-3 fs-4 me-2'><b>682.5 ₼</b></div>
                            <div className='month'>/ Iyun ayı</div>
                        </div>
                        <ChartComponent />
                    </div>
                    <Card />
                </div>
                <div className='container2 mt-4'>
                    <div className='sideBanner'>
                        <div className='gold d-flex'>
                            <Image className='ellipse'
                                src={ellipse1}
                                alt="Picture of the author"
                            />
                            <Image className='ellipse2'
                                src={ellipse2}
                                alt="Picture of the author"
                            />
                            <Image className='ellipse2'
                                src={ellipse3}
                                alt="Picture of the author"
                            />
                            <Image className='ellipse2'
                                src={ellipse4}
                                alt="Picture of the author"
                            />
                            <div className='innerDiv'>QIZIL PARTNYOR</div>
                            <Image className='circle'
                                src={circle}
                                alt="Picture of the author"
                            />
                            <Image className='cfLogo'
                                src={cfLogo}
                                alt="Picture of the author"
                            />
                        </div>
                        <p className='text-center'>City Finance</p>
                        <div className='d-flex mt-4 contact'>
                            <Image className='fb'
                                src={fb}
                                alt="Picture of the author"
                            />
                            <Image className='wp'
                                src={wp}
                                alt="Picture of the author"
                            />
                            <Image className='insta'
                                src={insta}
                                alt="Picture of the author"
                            />
                            <Image className='map'
                                src={map}
                                alt="Picture of the author"
                            />
                            <Image className='web'
                                src={web}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='info'>
                            <div className='header'>Şirkət haqqında</div>
                            <div className='text text-left me-4'>“City Finance” bank olmayan kredit təşkilatıdır. BOKT  2014-cü ildən Azərbaycan Respublikası Mərkəzi Bankı tərəfindən verilmiş lisenziya əsasında fəaliyyətə başlayaraq müxtəlif növ
                               <br></br> kreditlərin verilməsi xidmətini göstərir.</div>
                            <div className='contactInfo'>Əlaqə məlumatları</div>
                            <div className='d-flex align-items-center contactFlex'>
                                <Image className='phone'
                                    src={phone}
                                    alt="Picture of the author"
                                />
                                <span>+994 12 000 00 00</span>
                            </div>
                            <div className='d-flex align-items-center contactFlex'>
                                <Image className='phone'
                                    src={mail}
                                    alt="Picture of the author"
                                />
                                <span>info@cityfinance.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}