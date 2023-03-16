import 'stories-react/dist/index.css';
import './css/story.css'
import { stories } from './data'
import { useState } from 'react';
import Stories from 'stories-react';
import Image from 'next/image';
import pic1 from '../public/images/pic1.webp'

export default function Story() {
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);

    const bg = document.getElementById("bg-blur");

    const handlers = {
        0: () => {
            setIsShown(current => !current);
            bg.classList.add("blur")
        },
        1: () => {
            setIsShown2(current => !current);
            bg.classList.add("blur")
        },
        2: () => {
            setIsShown(current => !current);
            bg.classList.add("blur")
        },
        3: () => {
            setIsShown(current => !current);
            bg.classList.add("blur")
        },
        4: () => {
            setIsShown(current => !current);
            bg.classList.add("blur")
        },
        5: () => {
            setIsShown(current => !current);
            bg.classList.add("blur")
        },
        6: () => {
            setIsShown(current => !current);
            bg.classList.add("blur")
        },
        7: () => {
            setIsShown(current => !current);
            bg.classList.add("blur")
        },
        8: () => {
            setIsShown(current => !current);
            bg.classList.add("blur")
        },
    }


    const pictures = [
        { src: pic1 },
        { src: pic1 },
        { src: pic1 },
        { src: pic1 },
        { src: pic1 },
        { src: pic1 },
        { src: pic1 },
        { src: pic1 },
    ];

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
        setIsShown2(false)
        bg.classList.remove("blur");
    })

    return (
        <>
            <div id='storyFlex' className='d-flex mt-1 justify-content-between'>
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
                {pictures.map((picture, i) => (
                    <a className="story" key={i}>
                        <div className="profile" onClick={handlers[i]}>
                            <Image className="img" src={picture.src} alt="Picture of the author" />
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}