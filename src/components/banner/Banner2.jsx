import React from 'react'
import BanImg from '../../assets/flow14.png'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa6'
import { FadeUp } from '../animation/Animation'
import { FadeLeft } from '../animation/Animation'
const Banner2 = () => {
  return (
    <section className='bg-tertiary/10'>
    <div className='container grid grid-cols-1 md:grid-cols-2
    space-y-6 md:space-y-0 py-4 md:py-24'>
          
            {/* Brand Info */}
            <div className='flex flex-col justify-center' >
                <div className='text-center md:text-left space-y-4
               lg:max-w-[400px] '>
                    <motion.h1 
                    
                    variants={FadeUp(0.5)}
                    initial= 'hidden'
                    whileInView={'visible'}
                    viewport={{ once: true}}
                    className='text-3xl lg:text-6xl font-bold 
                    uppercase'>Online flower store
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
                               <button className='secondary-btn flex items-center gap-2'>
                                 Download The App
                                 <span>
                                    <FaDownload className='text-1xl'/>
                                 </span>
                                  </button>
                                     </motion.div>
                </div>
            </div>
              {/* Banner Image */}
              <div className='flex justify-center items-center'>
                    <motion.img
                    initial={{ opacity:0, x:200, rotate:75}}
                    whileInView={{ opacity:1, x:0, rotate:0}}
                    transition={{ duration:1, delay:0.2}}
                    viewport={{ once:true}}
                    src={BanImg} alt="" className='w-[350px] md:max-w-[500px] h-full object-cover drop-shadow'/></div>
    </div>
        </section>
  )
}

export default Banner2