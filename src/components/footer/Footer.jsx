import React from 'react';
import Banner from '../../assets/footerBanner.png';
import Logo from '../../assets/Logo.png';
import { 
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
 } from 'react-icons/fa';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    }
];

const Footer = () => {
  return (
    <div 
    style={BannerImg}
    className='text-white'>
      <div className='container'>
        <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-20 pt-5'>
            {/* company details */}
            <div className='py-8 px-4'>
                <h1
                className='
                sm:text-3xl text-xl font-bold sm:text-left
                text-justify mb-3 flex items-center gap-3
                '
                >
                    <img src={Logo} alt="" 
                    className='max-w-[50px]'
                    />
                    Shopsy
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae corrupti, eligendi maiores deserunt quisquam quaerat!
                </p>
            </div>
            
            {/* Footer Links */}
            <div className='grid grid-cols-2 sm:grid-cols-3
            col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                        <h1
                        className='sm:text-xl text-xl
                        font-bold sm:text-left text-justify mb-3'
                        >Important Links</h1>
                        <ul>
                            {
                                FooterLinks.map((link)=>(
                                    <li className='cursor-pointer
                                    hover:underline hover:scale-105
                                    hover:translate-x-1 duration-300 text' key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1
                        className='sm:text-xl text-xl
                        font-bold sm:text-left text-justify mb-3'
                        >Links</h1>
                        <ul>
                            {
                                FooterLinks.map((link)=>(
                                    <li className='cursor-pointer
                                    hover:underline hover:scale-105
                                    hover:translate-x-1 duration-300 text' key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* social links */}
                <div>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#">
                            <FaInstagram className='text-3xl'/>
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl'/>
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl'/>
                        </a>
                    </div>
                    <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaMobileAlt/>
                                <p>+91 123456789</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
