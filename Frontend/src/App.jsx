/*
installation Process...
>npm create vite@latest               these 3 on present tailwindcss.com
>npm install -D tailwindcss postcss autoprefixer
>npx tailwindcss init -p
>npm i -D daisyui@latest           on present->daisyui.com
>npm install react-slick --save     2 for cards on 'react slick slider' browser and import 2 in cards
>npm install slick-carousel --save
>npm i react-router-dom
>npm install react-hook-form        react-hook form
>npm install react-hot-toast        for popup for show message.login logout



Running Process...
>npm run dev     for Frontend
>npm start       for Backend
*/

import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './component/Signup'
import  { Toaster } from 'react-hot-toast'
import { useAuth } from './contest/AuthProvider'



function App() {
  const [authUser,setAuthUser]=useAuth()
   console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
     <Toaster />
    </div>
     
    </>
  )
}

export default App