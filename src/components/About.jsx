import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] justify-evenly items-center flex flex-col'>
                    <img 
                        src={icon}
                        alt={title}
                        className='object-contain w-16 h-16'
                    />
                    <h3 className='text-white text-[18px] font-medium text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText}`}>
                    About
                </h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-gray-400 text-[17px] leading-[32px]'>
               After graduating from Texas A&M in 2020 with a bachelors degree in Biomedical Science, 
                my plan was to pursue further studies and apply to dental school. It was during this time 
                though that I discovered my passion for coding and decided to start studying web development at the start of
                2022. Over the course of a year using reputable platforms such as CodeAcademy, The Odin Project, 
                and FreeCodeCamp, I gained a solid understanding of several frontend technologies including HTML, CSS, 
                JavaScript, and React. Learning these technologies gave me the ability to confidently develop visually 
                appealing and dynamic web applications within my very first year of learning web development. 
                Wanting to learn backend technologies and gain a solid understanding of computer science concepts, 
                at the start of 2023 I decided to start studying backend development as well as enroll at the 
                University of Houston to pursue a bachelors degree in Computer Science. Since my enrollment drawing 
                knowledge from resources such as my college courses and Udemy, I have learned a variety of backend 
                technologies including Node.js, Express, MongoDB, SQL, and Firebase as well as some new frontend 
                technologies including TypeScript, TailwindCSS, Bootstrap, SASS, and Next.js. While I am 
                still in the process of learning web development, I do believe that my transition from a 
                scientific background to the world of programming showcases my adaptability and commitment 
                to continuous learning and personal development.
            </motion.p>

            <div className='flex flex-wrap items-center justify-center gap-10 mt-20 md:justify-start md:items-start'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")