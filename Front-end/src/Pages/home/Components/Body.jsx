import React, { useContext } from 'react'
import { Theme } from '../../../App'

const Body = () => {
    const {theme}=useContext(Theme)
  return (
    <div className='h-screen w-full'>
        <div className={`${theme ==='light'? 'bg-white':'bg-secondary'} h-screen`}>
          ffff
        </div>


    </div>
  )
}

export default Body