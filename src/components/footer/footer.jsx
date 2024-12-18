import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { GiRose } from 'react-icons/gi'
const Footer = () => {

  return (
<footer className='bg-primary/10 py-12 mt-12'>
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    className='container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6'
  >
    {/* Logo Section */}
    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
      <p className='text-primary'>Flower</p>
      <p className='text-secondary'>Store</p>
      <GiRose className='text-primary text-3xl' />
    </div>

    {/* Social Section */}
    <div className='text-3xl flex items-center gap-4 text-gray-700'>
    <a href="https://instagram.com/divinegiftchidalu" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/Divinegift9503" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.facebook.com/DivinegiftJohnson" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://github.com/Divinejay-001" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  </motion.div>
</footer>


)
}

export default Footer