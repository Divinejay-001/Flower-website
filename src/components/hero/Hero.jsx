import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import Heropng from '../../assets/flow2.png'
import Leafpng from '../../assets/leaf.png'
import { motion } from 'framer-motion'
import { FadeRight } from '../animation/Animation'
const Hero = () => {
  return (
<section>
    <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
        {/* Brand Info */}
        <div className='flex flex-col justify-center
        py-14 md:py-0 relative z-10'>
            <div className='text-center md:text-left space-y-6'>
                <motion.h1
                variants={FadeRight(0.6)}
                initial = "hidden"
                animate = "visible"
                 className='text-5xl lg:text-6xl font-bold 
                leading-relaxed xl:leading-loose font-averia'>Healthy 
                <br />
                Fresh <span
                className='text-secondary'>Flowers!</span>
                </motion.h1>
                <motion.p
                variants={FadeRight(0.9)}
                initial = "hidden"
                animate = "visible"
                className='text-3xl md:text-2xl tracking-wide text-primary '>Order Now For Beautiful Fresh Blooms</motion.p>
<motion.p 
variants={FadeRight(1.2)}
initial = "hidden"
animate = "visible"
className='text-tertiary'>Vibrant and fragrant flowers to brighten your day.  
   Gift daily joy and beauty to yourself or your loved ones.  
   Order now and enjoy 20% off on your first bouquet!
</motion.p>
            {/* button section */}
            <motion.div
            variants={FadeRight(1.5)}
            initial = "hidden"
            animate = "visible"
            className='flex justify-center md:justify-start'>
                <button className='primary-btn flex items-center gap-2'>
                    <span>
                        <IoBagHandleOutline/>
                    </span>
                    Order Now</button>

            </motion.div>
            </div>
        </div>
        {/* Hero Images */}
        <div className='flex justify-center items-center'>
            <motion.img 
        initial = {{opacity: 0, x: 200, rotate: 75}}
            animate = {{opacity: 1, x:0, rotate:0}}
            transition = {{duration: 3, delay: 0.2}}
            src={Heropng} alt=""
             className='w-[350px] md:w-[500px] drop-shadow' />
        </div>
        {/* Leaf Images */}
        <div  className='absolute top-14 md:top-0 right-1/2 blur-sm 
             opacity-80 rotate-[135deg]'>
            <motion.img
             initial = {{opacity: 0, y: 200, rotate: 75}}
             animate = {{opacity: 1, y:0, rotate:0}}
             transition = {{duration: 1, delay: 1.5}}
             
            src={Leafpng} alt=""
            className='w-full md:max-w-[150px]'
             />
             </div>
    </div>
</section>  
 )
}

export default Hero