import 'stories-react/dist/index.css';
import Image from 'next/image';
// import story1 from '../public/images/story1.svg'
// import story2 from '../public/images/story2.svg'
// import story3 from '../public/images/story3.svg'
// import story4 from '../public/images/story4.svg'
// import story5 from '../public/images/story5.svg'
// import story6 from '../public/images/story6.svg'
// import story7 from '../public/images/story7.svg'
// import story8 from '../public/images/story8.svg'
import pic1 from '../public/images/pic1.webp'
import './css/story.css'
import Stories from 'stories-react';
import { useState } from 'react';


export default function Story() {
    const [isShown, setIsShown] = useState(false);
    const handleClick = () => {
        setIsShown(current => !current);
        // document.body.style.background='rgba(255,255,255,0.5)';
        // document.body.style.filter='blur(10px)';
    }
    document.body.addEventListener('click', () => { setIsShown(false) })

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

    return (
        <>
            <div className='d-flex mt-1 justify-content-between'>
                {isShown && <div className="slideshow" ><Stories width="400px" height="600px" stories={stories} /></div>}
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick} className="img"
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
            </div>
        </>
    )
}