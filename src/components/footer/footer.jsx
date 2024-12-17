import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { GiRose } from 'react-icons/gi'
const Footer = () => {

  return (
<footer className='bg-primary/10  py-12 mt-12'>
    <motion.div
    initial = {{opacity: 0}}
    whileInView = {{opacity: 1}}
    transition = {{duration: 1, delay: 0.2}}
    className=' container flex justify-between items-center'>
{/* logo section  */}
<div className='text-2xl flex items-center gap-2 font-bold uppercase'>
    <p className='text-primary'>Flower</p>
    <p className='text-secondary'>Store</p>
    <GiRose className='text-primary text-3xl'/>
</div>
{/* social section  */}
<div className='text-3xl flex items-center gap-4 mt-6 text-gray-700'>
    <FaInstagram/>
    <FaTwitter/>
    <FaFacebook/>
    <FaGithub/>
</div>
    </motion.div>
</footer>
)
}

export default Footer