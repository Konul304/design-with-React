import 'stories-react/dist/index.css';
import '../css/story.css'
import { stories } from './data'
import { useState, useRef } from 'react';
import Stories from 'stories-react';
import Image from 'next/image';
import pic1 from '../../public/images/pic1.webp'

export default function Story() {
    const [shownIndex, setShownIndex] = useState(-1);
    const bgRef = useRef(null);

    const handleClick = () => {
        setShownIndex(-1);
        bgRef.current.classList.remove('blur');
    };
    document.body.addEventListener('click', handleClick);

    const handlePictureClick = (index) => {
        setShownIndex(index);
        bgRef.current.classList.add('blur');
    };

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
    return (
        <>
            <div id="storyFlex" className="d-flex mt-1 justify-content-between">
                {(shownIndex >= 0) && (
                    <div className="slideshow" id="story">
                        <Stories
                            key={shownIndex}
                            onAllStoriesEnd={() => {
                                if (shownIndex === 7) {
                                    handleClick()
                                } else {
                                    setShownIndex((current) => current + 1);
                                }
                            }}
                            defaultDuration={20000}
                            pauseStoryWhenInActiveWindow={true}
                            width="400px"
                            height="600px"
                            stories={stories[shownIndex]}
                        />
                    </div>
                )}
                {pictures.map((picture, i) => (
                    <a className="story" key={i}>
                        <div className={`profile${shownIndex === i ? ' activeStory' : ''}`} onClick={() => handlePictureClick(i)}>
                            <Image className="img" src={picture.src} alt="Picture of the author" />
                        </div>
                    </a>
                ))}
            </div>
            <div id="bg-blur" ref={bgRef}></div>
        </>
    );
}