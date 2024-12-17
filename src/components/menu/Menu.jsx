import React from 'react'
import flow from '../../assets/flow1.png'
import Lily from '../../assets/flow3.png'
import rose from '../../assets/flow4.png'
import sun from '../../assets/flow5.png'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeLeft } from '../animation/Animation'
const MenusData=[
    {
        id: 1,
        title: 'Fresh Red Roses',
        link: '/',
          price: '$2.00',
          img: rose,
          delay: 0.3
    },
    {
        id: 2,
        title: 'Fresh FLowers',
        link: '/',
          price: '$2.00',
          img: Lily,
          delay: 0.6
    },
    {
        id: 3,
        title: 'Fresh FLowers',
        link: '/',
          price: '$4.00',
          img: sun,
          delay: 0.9
    },
    {
        id: 4,
        title: 'Fresh Flowers',
        link: '/',
          price: '$5.00',
          img: flow,
          delay: 1.2
    },
            ]
const Menu = () => {
  return (
    <section>
        <div className='container pt-12 pb-20'> 
        <motion.h1 
        initial={{opacity:0, x: -200}}
        whileInView={{opacity:1, x:0}}
        transition={{duration: 1, delay: 0.3}}
        className='text-2xl font-bold text-left pb-10 uppercase'>Our Menu</motion.h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
        gap-6'>
            {MenusData.map((menu)=>(
                <motion.div
                variants={FadeLeft(menu.delay)}
                initial= 'hidden'
                whileInView={'visible'}
                whileHover={{ scale: 1.1}}
                className='bg-white rounded-3xl px-4 py-2 
                shadow-[0_0_22px_0_rgba(0,0,0,0.25)] flex flex-row justify-around items-center gap-3'>
                    <img src={menu.img} alt="" className='w-[30px] mb-4 scale-125
                     transform-translate-y-6' />
                     <div>
                         <h1 className='text-lg font-semibold'>{menu.title}</h1>
                         <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                     </div>
                </motion.div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default Menu