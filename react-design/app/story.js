import 'stories-react/dist/index.css';
import {stories1} from './data'
import {stories2} from './data'
import Image from 'next/image';
import pic1 from '../public/images/pic1.webp'
import './css/story.css'
import Stories from 'stories-react';
import { useState } from 'react';

export default function Story() {
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);

    const handleClick1 = () => {
        setIsShown(current => !current);
    }
    const handleClick2 = () => {
        setIsShown2(current => !current);
    }
    
    const handleSwitch1 = () => {
        setIsShown(false);
        setIsShown2(true);
    }
    const handleSwitch2 = () => {
        setIsShown2(false);
    }
    document.body.addEventListener('click', () => {
        setIsShown(false)
        setIsShown2(false)
    })

    return (
        <>
            <div className='d-flex mt-1 justify-content-between'>
                {isShown && <div className="slideshow" id='story'>
                    <Stories id='story'
                        onAllStoriesEnd={handleSwitch1}
                        defaultDuration={20000}
                        pauseStoryWhenInActiveWindow={true}
                        width="400px" height="600px"
                        stories={stories1} />
                </div>}
                {isShown2 && <div className="slideshow" >
                    <Stories
                        onAllStoriesEnd={handleSwitch2}
                        defaultDuration={20000}
                        pauseStoryWhenInActiveWindow={true}
                        width="400px" height="600px"
                        stories={stories2} />
                </div>}
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick1} className="img"
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick2}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick1}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick1}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick1}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick1}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick1}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a class="story">
                    <div class="profile">
                        <Image onClick={handleClick1}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
            </div>
        </>
    )
}