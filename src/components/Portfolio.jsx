import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { FaGlobe } from "react-icons/fa";


const ProjectCard = ({index, name, description, tags, image, source_code_link, live_demo_link}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{max: 45, scale: 1, speed: 450}} className="bg-tertiary p-5 rounded-2xl md:w-[360px] w-full">
                <div className='relative w-full h-[230px]'>
                    <img 
                        src={image}
                        alt={name}
                        className='object-cover w-full h-full rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end gap-2 m-3 card-img_hover'>
                        <div onClick={() => window.open(live_demo_link, "_blank")} className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient'>
                            <FaGlobe size={22} color="white"/>
                        </div>
                        <div onClick={() => window.open(source_code_link, "_blank")} className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient'>
                            <img 
                                src={github}
                                alt="github"
                                className='object-contain w-3/4 h-3/4'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-medium text-[24px]'>
                        {name}
                    </h3>
                    <p className='mt-2 text-gray-400 text-[14px]'>
                        {description}
                    </p>
                </div>

                <div className='flex flex-wrap gap-2 mt-4'> 
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Portfolio = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText} ml-1`}>
                    Portfolio
                </h2>
            </motion.div>

            <div className='flex flex-wrap items-center justify-center mt-8 md:justify-start md:items-start gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Portfolio, "portfolio")