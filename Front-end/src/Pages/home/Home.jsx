import React from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Body from './Components/Body'

const Home = () => {
  return (
    <>
    <Header />
    <div className='flex'>
    <Sidebar />
    <Body />
  


    </div>
    
    </>
  )
}

export default Home