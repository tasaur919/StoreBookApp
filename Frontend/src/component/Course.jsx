import React, { useEffect, useState } from 'react'
//import list from '../../public/list.json'
import Cards from './Cards'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res=await axios.get('http://localhost:4001/books');
        setBook(res.data);
        
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[]) 
  return (
    <>
    <div className='max-w-screen-xl container mx-auto md:px-20 px-2'>
       <div className='mt-28 text-center'>
        <h1 className='text-center font-semibold md:font-bold text-2xl md:text-3xl'>We're Delighted to have you <span className='text-pink-500'>here:)</span></h1>
        <p className='mt-6 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro dolore corporis quod dicta culpa molestias laborum odio reprehenderit est adipisci quis eum sint consectetur tenetur consequuntur obcaecati, explicabo ipsam odit cupiditate sapiente? Ut ab corporis in recusandae aliquam similique. Mollitia saepe porro, sapiente et tempore quibusdam ut sequi voluptas placeat, beatae impedit. Aliquam sint quos ratione cum animi quae molestiae nemo eius cupiditate. Nulla minima pariatur itaque, maxime quibusdam labore id reprehenderit vero nihil veniam ab dolorum expedita ea tempore. Voluptatibus ad temporibus ipsam consequuntur accusamus odit maiores commodi esse vitae, minus dicta cum, placeat similique ut nobis incidunt? Accusantium esse iste explicabo iure eos unde fugiat enim, commodi odit id hic beatae magnam iusto fuga cupiditate quis in!</p>
        <Link to="/">
        <button className='mt-12 bg-pink-500 hover:bg-pink-700 text-center px-3 py-2 rounded-md'>Back</button>
       
        </Link>
        </div>
      
      <div className='mt-8 grid grid-cols-1 md:grid-cols-3'>
        {
           book.map((item)=>
            <Cards key={item.id} item={item}/>
        )}
      </div>

    </div>
    
    </>
  )
}

export default Course