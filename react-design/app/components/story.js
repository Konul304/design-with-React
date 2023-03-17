import 'stories-react/dist/index.css';
import '../css/story.css'
import { stories } from './data'
import { useState, useRef, useEffect } from 'react';
import Stories from 'stories-react';
import Image from 'next/image';
import pic1 from '../../public/images/pic1.webp'

export default function Story() {
    const [shownIndex, setShownIndex] = useState(-1);
    const bgRef = useRef(null);

    useEffect(() => {
        const handleClick = () => {
            setShownIndex(-1);
            bgRef.current.classList.remove('blur');
        };
        document.body.addEventListener('click', handleClick);
        return () => {
            document.body.removeEventListener('click', handleClick);
        };
    }, []);

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
                {shownIndex >= 0 && (
                    <div className="slideshow" id="story">
                        <Stories
                            onAllStoriesEnd={() => {
                                setShownIndex(-1)
                                bgRef.current.classList.remove('blur');
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
                        <div className="profile" onClick={() => handlePictureClick(i)}>
                            <Image className="img" src={picture.src} alt="Picture of the author" />
                        </div>
                    </a>
                ))}
            </div>
            <div id="bg-blur" ref={bgRef}></div>
        </>
    );
}