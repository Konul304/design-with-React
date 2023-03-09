import 'stories-react/dist/index.css';
import Image from 'next/image';
import story1 from '../public/images/story1.svg'

export default function Story() {
    return (
        <>
            <div className='d-flex mt-4 justify-content-between'>
                <Image 
                    src={story1}
                    alt="Picture of the author"
                />
                 <Image 
                    src={story1}
                    alt="Picture of the author"
                />
                 <Image 
                    src={story1}
                    alt="Picture of the author"
                />
                 <Image 
                    src={story1}
                    alt="Picture of the author"
                />
                 <Image 
                    src={story1}
                    alt="Picture of the author"
                />
                 <Image 
                    src={story1}
                    alt="Picture of the author"
                />
                 <Image 
                    src={story1}
                    alt="Picture of the author"
                />
                 <Image 
                    src={story1}
                    alt="Picture of the author"
                />
            </div>
        </>
    )
}