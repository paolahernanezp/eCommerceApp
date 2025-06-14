import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  const[visible, setVisible] = useState (false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>

        <img src={assets.logo} className="w-36"  alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
    <NavLink to='/' className='flex flex-col items-center gap-1'>
      <p>HOME</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
    </NavLink>
    <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
      <p>COLLECTION</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
    </NavLink>
    <NavLink to='/about' className='flex flex-col items-center gap-1'>
      <p>ABOUT</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
    </NavLink>
    <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
      <p>CONTACT</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
    </NavLink>
</ul>
<div className='flex items-center gap-6'>
  <img src={assets.search_icon} className= "w-5 cursor-pointer"  alt="" />
  <div className='group relative'>
  <img  className= "w-5 cursor-pointer"  src={assets.profile_icon} alt="" />
  {/**
 * Paso 10: Crear menu desplegable
 */}
 <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
    <p className='cursor-pointer hover:text-black'>My Profile</p>
    <p className='cursor-pointer hover:text-black'>Orders</p>
    <p className='cursor-pointer hover:text-black'>Logout</p>
  </div> 
 </div>
</div>
<Link to="/cart" className='relative'>
  <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
  <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black  text-white aspect-square rounded-full text-[8px]'>10</p>
</Link>
{/** Paso 11: CREANDO UN MENU RESPONSIVO PARA SI ESTAMOS ABRIENDOLO EN EL CELULAR QUE UNICAMENTE SE ACTIVA CUANDO CAMBIA EL TAMAÑO DE LA PANTALLA */}
<img onClick= {()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden ' alt="" />
</div> 
{/** Paso 12: Side bar menu for small screen, vamos a ponerle al div un dynamic class name  donde utilizaremos el estado de la variable para que
 * cuando cambie el estado entonces cambiara el classname, para hacerlo se utilizan {``}
 */}
<div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}` }>

 {/**Paso 13: Crear una ventana para poder cerrar el menu desplegable */}

  <div className='flex flex-col text-gray-600'>
    <div>

    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
