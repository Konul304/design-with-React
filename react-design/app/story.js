import 'stories-react/dist/index.css';
import './css/story.css'
import {stories} from './data'
import { useEffect, useState } from 'react';
import Stories from 'stories-react';
import Image from 'next/image';
import pic1 from '../public/images/pic1.webp'

export default function Story() {
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);

    const bg = document.getElementById("bg-blur");

    const handleClick1 = () => {
        setIsShown(current => !current);
        bg.classList.add("blur");
    }
    const handleClick2 = () => {
        setIsShown2(current => !current);
        bg.classList.add("blur");
    }
    
    const handleSwitch1 = () => {
        setIsShown(false);
        setIsShown2(true);
    }
    const handleSwitch2 = () => {
        setIsShown2(false);
        bg.classList.remove("blur");
    }
    document.body.addEventListener('click', () => {
        setIsShown(false)
        bg.classList.remove("blur");
        setIsShown2(false)
        bg.classList.remove("blur");
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
                        stories={stories[0]} />
                </div>}
                {isShown2 && <div className="slideshow" >
                    <Stories
                        onAllStoriesEnd={handleSwitch2}
                        defaultDuration={20000}
                        pauseStoryWhenInActiveWindow={true}
                        width="400px" height="600px"
                        stories={stories[1]} />
                </div>}
                <a className="story">
                    <div className="profile" onClick={handleClick1}>
                        <Image  className="img"
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a className="story">
                    <div className="profile">
                        <Image onClick={handleClick2}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a className="story">
                    <div className="profile">
                        <Image onClick={handleClick1}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a className="story">
                    <div className="profile">
                        <Image onClick={handleClick1}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a className="story">
                    <div className="profile">
                        <Image onClick={handleClick1}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a className="story">
                    <div className="profile">
                        <Image onClick={handleClick1}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a className="story">
                    <div className="profile">
                        <Image onClick={handleClick1}
                            src={pic1}
                            alt="Picture of the author"
                        />
                    </div>
                </a>
                <a className="story">
                    <div className="profile">
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