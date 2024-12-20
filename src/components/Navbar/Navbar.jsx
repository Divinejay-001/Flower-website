import React, { useState } from 'react'
// import { FaLeaf } from 'react-icons/fa'
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md'
import ResponsiveMenu from './ResponsiveMenu'
import { GiRose } from 'react-icons/gi'
import { motion } from 'framer-motion'
const NavbarMenu =[
    {
        id: 1,
        title: "Home",
links:"/",
 },
    {
        id: 2,
        title: "Products",
links:"#",
 },
    {
        id: 3,
        title: "About",
links:"#",
 },
    {
        id: 4,
        title: "Shop",
links:"#",
 },
    {
        id: 5,
        title: "Contacts",
links:"#",
 },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <nav>
<motion.div
initial= {{ opacity: 0}}
animate= {{ opacity: 1}}
transition={{ duration:0.5, delay:0.5 }}
className='container flex justify-between items-center bg-primary/40 fixed md:relative z-20 py-4 md:pt-4'>
<div className='text-2xl flex items-center gap-2 font-bold uppercase'>
    <p className='text-primary font-extrabold'>Blossom</p>
    <p className='text-secondary'>Haven</p>
    {/* <FaLeaf /> */}
    <GiRose className='text-primary text-3xl'/>
</div>
<div className='hidden md:block'>
    <ul className='flex items-center gap-6 text-gray-600'>
        {NavbarMenu.map((menu) => (
            <li key={menu.id} >
                <a href={menu.links} 
                className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'
                >{menu.title}</a>
            </li>
        ))}
        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-700'>
            <MdOutlineShoppingCart/>
        </button>
    </ul>
</div>
            {/*Mobile Hamburger Menu section */}
            <div className='md:hidden'  onClick={()=>setOpen(!open)}>
                <MdMenu className='text-4xl text-primary hover:text-primary'/>
            </div>

            
        </motion.div>
        </nav>
        <ResponsiveMenu open={open}/>
        </>
  )
}

export default Navbar