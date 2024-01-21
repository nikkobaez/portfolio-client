import { useState, useEffect } from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { profile } from '../assets'

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);


    return (
        <section className={`relative w-full ${isMobile ? "h-[100vh]" : "h-[115vh]"} mx-auto`}>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#367ea4]'/>
                    <div className='w-1 h-40 sm:h-80 violet-gradient'/>
                </div>

                <div className='flex w-full gap-x-16'>
                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}> 
                            Howdy, I'm <span className='text-[#367ea4]'> Nikko Baez </span>
                        </h1>

                        <div>
                        
                        </div>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            A Computer Science Student @ UH <br /> and Fullstack Web Developer
                        </p>
                    </div>

                    <div className='lg:w-[175px] lg:h-[175px] lg:flex hidden'>
                        <img 
                            src={profile}
                            alt="profile"
                            className='object-cover object-top w-full h-full mt-3 rounded-full'
                        />
                    </div>
                </div>
            </div>

            <ComputersCanvas />
        </section>
    )
}

export default Hero