import React, { useContext, useState } from 'react'
import logo from '../../../assets/logo.png'
import { Divider, Switch,styled, useTheme  } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Theme } from '../../../App';








const Sidebar = () => {
    const{theme,setTheme}=useContext(Theme)
    const [channelOpen,setChannelOpen]=useState(false)
   
  return (
    <div className={`w-[250px] ${theme ==='light'? 'bg-[#350D36]':'bg-primary'} h-screen `}>
        <div className='mb-5'>
            <div className='flex'>
            <img src={logo} alt="" className='object-cover opacity-30 relative ' /> 
            <div className='  absolute '>
            <h1 className='text-white mx-4 mt-10 text-[22px] leading-5 '>UOK-Community</h1>
           </div>
            </div>
           
           
        </div>
        <Divider />
        <div className='text-white ml-6 text-lg'>
            <div className='flex'>
              <p>Channels</p>
              <ArrowDropDownIcon  onClick={()=>setChannelOpen((prev)=>!prev)} sx={{marginTop:'3px',cursor:'pointer' }} />
            </div>
           { channelOpen && <div className='text-gray-400 '>
                <div className='mb-1 cursor-pointer'>
                <p className=''>#Computer-science</p>

                </div>
                <div className='mb-1 cursor-pointer'>
                <p>#Marketing</p>

                </div>
                <div className='mb-1 cursor-pointer'>
                <p>#financial</p>

                </div>
               
               
         
            </div>}
        

        </div>



    </div>
  )
}

export default Sidebar