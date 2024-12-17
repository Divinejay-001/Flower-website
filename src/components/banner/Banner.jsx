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
                initial= 'hidden'
                whileInView={'visible'}
                viewport={{ once: true}}
                className='text-3xl lg:text-6xl font-bold 
                uppercase'>Brand Info
                </motion.h1>
                <motion.p
               variants={FadeUp(0.7)}
                initial= 'hidden'
                whileInView={'visible'}
                viewport={{ once: true}}
                >Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Aut dolore velit explicabo cum
                perspiciatis? Eveniet voluptatem enim ea quibusdam illum earum eaque, architecto iusto voluptate placeat ex asperiores, suscipit perferendis?</motion.p>
          <motion.p
          variants={FadeUp(0.9)}
          initial= 'hidden'
          whileInView={'visible'}
          viewport={{ once: true}}
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores neque quas
             atque architecto, eum praesentium illum, ad facere, dicta deleniti sunt amet similique! Voluptate assumenda qui minima alias! Dolor, enim.</motion.p>
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