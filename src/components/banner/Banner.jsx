import React from 'react'
import BanImg from '../../assets/flow9.png'
import { motion } from 'framer-motion'
import { FadeUp } from '../animation/Animation'
import { FadeLeft } from '../animation/Animation'
const Banner = () => {
  return (
    <section className='bg-secondary/10'>
<div className='container grid grid-cols-1 md:grid-cols-2
space-y-6 md:space-y-0 py-4'>
        {/* Banner Image */}
            <div className='flex justify-center items-center'>
                <motion.img
                initial={{ opacity:0, scale:0.5}}
                whileInView={{ opacity:1, scale:1}}
                transition={{ type: "spring", stiffness:100, delay:0.2}}
                viewport={{ once:true}}
                src={BanImg} alt="" className='w-[300px] md:max-w-[400px] h-full object-cover drop-shadow'/></div>
        {/* Brand Info */}
        <div className='flex flex-col justify-center' >
            <div className='text-center md:text-left space-y-4
           lg:max-w-[400px] drop-shadow'>
             <motion.h1 
  variants={FadeUp(0.5)}
  initial='hidden'
  whileInView='visible'
  viewport={{ once: true }}
  className='text-3xl lg:text-6xl font-bold uppercase'>
  Brand Info
</motion.h1>
<motion.p
  variants={FadeUp(0.7)}
  initial='hidden'
  whileInView='visible'
  viewport={{ once: true }}>
  Welcome to Blossom Haven, your one-stop destination for stunning floral arrangements that add beauty and joy to every occasion. Our commitment to freshness and creativity ensures every bouquet tells a story of elegance and love.
</motion.p>
<motion.p
  variants={FadeUp(0.9)}
  initial='hidden'
  whileInView='visible'
  viewport={{ once: true }}>
  From vibrant seasonal blooms to timeless classics, we take pride in handcrafting each piece to suit your needs. Whether it’s a celebration, a heartfelt gift, or simply brightening up your space, Blossom Haven is here to make your moments unforgettable.
</motion.p>

           {/* Button section */}
            <motion.div
                     
            variants={FadeUp(1.1)}
            initial= 'hidden'
            whileInView={'visible'}
            viewport={{ once: true}}

                       className='flex justify-center md:justify-start'>
                           <button className='tertiary-btn flex items-center gap-2'>
                             Learn More</button>
                                 </motion.div>
            </div>
        </div>
</div>
    </section>
  )
}

export default Banner