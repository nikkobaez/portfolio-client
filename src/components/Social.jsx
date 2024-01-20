import { FaGithub, FaLinkedin, HiOutlineMail, BsFillPersonLinesFill } from '../assets'

const Social = () => {
    const socialLinks = [
        {
            id: 0,
            child: (
                <>
                    Github <FaGithub size={30}/>
                </>
            ),
            href: "https://github.com/nikkobaez",
            style: 'rounded-tr-md'
        },
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href: "https://linkedin.com/in/nikkobaez",
        },
        {
            id: 2,
            child: (
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto:nikkobaez82@gmail.com ",
        },
        {
            id: 3,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: "/Nikko Baez's Resume.pdf",
            style: 'rounded-br-md',
            download: true
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-50'>
            <ul>
                {socialLinks.map(link => (
                    <li key={link.id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#151030] ${link.style}`} > 
                        <a href={link.href} download={link.download} rel="noreferrer" target='_blank' className='flex items-center justify-between w-full text-white'> 
                            {link.child}
                        </a> 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Social