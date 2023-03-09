import 'stories-react/dist/index.css';
import Image from 'next/image';
import story1 from '../public/images/story1.svg'
import story2 from '../public/images/story2.svg'
import story3 from '../public/images/story3.svg'
import story4 from '../public/images/story4.svg'
import story5 from '../public/images/story5.svg'
import story6 from '../public/images/story6.svg'
import story7 from '../public/images/story7.svg'
import story8 from '../public/images/story8.svg'
import './css/story.css'
import Stories from 'stories-react';
import { useState } from 'react';


export default function Story() {
    const [isShown, setIsShown] = useState(false);

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
        setIsShown(current => !current);
    }
    return (
        <>
            <div className='d-flex mt-2 justify-content-between'>
                {isShown && <div className="slideshow" ><Stories width="400px" height="600px" stories={stories} /></div>}
                <Image onClick={handleClick}
                    src={story1}
                    alt="Picture of the author"
                />
                <Image onClick={handleClick}
                    src={story2}
                    alt="Picture of the author"
                />
                <Image onClick={handleClick}
                    src={story3}
                    alt="Picture of the author"
                />
                <Image onClick={handleClick}
                    src={story4}
                    alt="Picture of the author"
                />
                <Image onClick={handleClick}
                    src={story5}
                    alt="Picture of the author"
                />
                <Image onClick={handleClick}
                    src={story6}
                    alt="Picture of the author"
                />
                <Image onClick={handleClick}
                    src={story7}
                    alt="Picture of the author"
                />
                <Image onClick={handleClick}
                    src={story8}
                    alt="Picture of the author"
                />
            </div>
        </>
    )
}