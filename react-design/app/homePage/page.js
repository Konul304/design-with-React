'use client';
import '../css/homePage.css'
import Image from 'next/image'
import Stories from 'stories-react';
import 'stories-react/dist/index.css';
import story1 from '../../public/images/story1.svg'
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
import Card from '../cards';

export default function HomePage() {
    const stories = [
        {
            type: 'image',
            url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
            duration: 5000,
        },
        {
            type: 'image',
            duration: 6000,
            url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
        },
        {
            duration: 7000,
            type: 'image',
            url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
        },
    ];

    const handleClick = () => {
        return <Stories width="400px" height="600px" stories={stories} />
    }
    return (
        <>
            <div className='d-flex justify-content-start container'>
                <div className="container1">
                    <h5 className='mt-4'>Yeniliklər</h5>
                    <div className='d-flex mt-4'>
                        <Image id='story'
                            src={story1}
                            alt="Picture of the author"
                        />
                        {/* <Image 
                        src={story2}
                        alt="Picture of the author"
                    />
                     <Image 
                        src={story3}
                        alt="Picture of the author"
                    /> */}
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
                            <div className='text'>“City Finance” bank olmayan kredit təşkilatıdır. BOKT  2014-cü ildən Azərbaycan Respublikası Mərkəzi Bankı tərəfindən verilmiş lisenziya əsasında fəaliyyətə başlayaraq müxtəlif növ
                                kreditlərin verilməsi xidmətini göstərir.</div>
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