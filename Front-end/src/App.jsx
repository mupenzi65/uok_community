import { createContext, useContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Loader from './Pages/home/Components/Loader';
const LazyHome = lazy(() => import('./Pages/home/Home'));
export const Theme=createContext()
function App() {
  
  const [theme,setTheme]=useState('ligh')
 

  return (
    <>
    <Theme.Provider value={{theme,setTheme}}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Suspense fallback={<Loader />}><LazyHome /></Suspense>} />

     


    </Routes>
    
    </BrowserRouter>

    </Theme.Provider>
    
   
    </>
  )
}

export default App
