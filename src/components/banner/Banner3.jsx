import React from 'react'
import BanImg from '../../assets/ban.jpeg'
import { motion } from 'framer-motion'
import { FadeUp } from '../animation/Animation'
import { FadeLeft } from '../animation/Animation'
import { IoBagHandleOutline } from 'react-icons/io5'



const bgStyle={
    backgroundImage: `url(${BanImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

const Banner3 = () => {
  return (
    <section className='container mb-12'>
    <div
    style={bgStyle}
    className='container grid grid-cols-1 md:grid-cols-2
    space-y-6 md:space-y-0 py-14 rounded-3xl'>
            {/*Blank Banner Image */}
                <div>

                </div>
            {/* Brand Info */}
            <div className='flex flex-col justify-center font-averia' >
                <div className='text-center md:text-left space-y-4
               lg:max-w-[400px] drop-shadow'>
                   <motion.h1 
  variants={FadeLeft(0.5)}
  initial='hidden'
  whileInView='visible'
  viewport={{ once: true }}
  className='text-3xl text-white lg:text-6xl font-bold uppercase'>
  Get Nice Flowers Today
</motion.h1>
<motion.p
  variants={FadeLeft(0.7)}
  initial='hidden'
  whileInView='visible'
  viewport={{ once: true }}
  className='text-white'>
  Brighten your day with fresh, vibrant flowers delivered straight to your door. Whether it’s a special occasion or just because, our stunning arrangements are crafted to bring joy, elegance, and a touch of nature into your life.
</motion.p>

               {/* Button section */}
                <motion.div
                         
                variants={FadeLeft(0.9)}
                initial= 'hidden'
                whileInView={'visible'}
                viewport={{ once: true}}
    
        className='flex justify-center md:justify-start'>
        <button className='tertiary-btn flex items-center gap-2'>
                    <span>
                <IoBagHandleOutline/>
                </span>
            Order Now</button>
        </motion.div>
                </div>
            </div>
    </div>
        </section>
  )
}

export default Banner3