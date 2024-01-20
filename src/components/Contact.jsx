import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import axios from 'axios'


const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;

        setForm({
        ...form,
        [name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setLoading(true);

        axios.post("https://getform.io/f/96f62d81-228a-484f-b2a0-628f220d1f40", {
            name: form.name,
            email: form.email,
            message: form.message
        }, { 
            headers: {'Accept': 'application/json'
        }})
        .then((response) => {
            console.log(response)

            setForm({
                name: "",
                email: "",
                message: ""
            })

            setLoading(false);
        })
        .catch((error) => {
            console.log(false)
        })
    }

    return (
        <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
            <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='xl:min-w-[50%] flex-1 xl:flex-[0.75] bg-black-100 p-8 rounded-2xl'>
                <h3 className={`${styles.sectionHeadText}`}> 
                    Contact 
                </h3>

                <form ref={formRef} method='POST' onSubmit={handleSubmit} className='flex flex-col gap-8 mt-12'>
                    <label className='flex flex-col'>
                        <span className='mb-4 font-medium text-white'> Your Name </span>
                        <input 
                            type="text" 
                            name="name" 
                            onChange={handleChange}
                            value={form.name} 
                            placeholder='Enter your name'
                            className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
                        />
                    </label>

                    <label className='flex flex-col'>
                        <span className='mb-4 font-medium text-white'> Your Email </span>
                        <input 
                            type="email" 
                            name="email" 
                            onChange={handleChange}
                            value={form.email} 
                            placeholder='Enter your email'
                            className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
                        />
                    </label>

                    <label className='flex flex-col'>
                        <span className='mb-4 font-medium text-white'> Your Message </span>
                        <textarea
                            rows="7"
                            name="message"
                            onChange={handleChange}
                            value={form.message}
                            placeholder='Enter your message'
                            className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary'
                        />
                    </label>

                    <button type="submit" className='px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary w-[125px] shadow-primary rounded-xl'>
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div variants={slideIn("right", "tween", 0.2, 1)} className=' xl:max-w-[50%] xl:flex-1 xl:h-auto md:h-[550px] h-[400px]'>
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact")