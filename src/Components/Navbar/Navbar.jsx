
import logo from "../../assets/logo-GdqARQRt.png"
import {NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
    <nav className='fixed right-0 left-0 top-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent'>
     <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
            <a href="/" className='flex items-center gap-3 group'>
              <div className='relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300'>
                <img src={logo} alt="Photography Logo" className='w-full h-full object-cover' />
              </div>
              <div className='flex flex-col'>
                <span className='text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent'>عدسة</span>
                <span className='text-xs text-orange-400/80 hidden sm:block tracking-wide'>عالم التصوير الفوتوغرافي</span>
              </div>
            </a>
            <div className='hidden md:flex items-center'>
                <div className='flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]'>
                    <button className='nav-btn'> <NavLink className='nav-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white' to ="" >الرئيسية</NavLink></button>
                    <button className='nav-btn'><NavLink className='px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white' to="blog" >المدونة</NavLink></button>
                    <button className='nav-btn'><NavLink className='px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white' to= "about">من نحن</NavLink></button>
                </div>
            </div>
            <div className='hidden md:flex items-center gap-3'>
                <button className='p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button className='bg-linear-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-full font-semibold text-sm text-white transition-transform duration-300 hover:-translate-y-1'><a href="">ابدأ القراءة</a></button>
            </div>
        </div>
     </div>
    </nav>  
    </>
  )
}
