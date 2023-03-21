 import React from 'react'
 import AnimateName from './AnimateName'
 import { NavLink } from 'react-router-dom'
 
 const Header = () => {
   return (
     <div className='flex flex-row justify-between' >
     <AnimateName/>
     </div>
   )
 }
 
 export default Header