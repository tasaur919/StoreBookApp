import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json'
import Cards from './Cards';


function Freebook() {
    const filterBook=list.filter((data)=>
        data.category==="Free"
    )
    //console.log(filterBook)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
  return (
    <>
    <div className='max-w-screen-xl container mx-auto md:px-20 px-2'>
        <div>
        <h1 className='text-2xl mt-5 font-bold'>Free Offered Courses</h1>
        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero excepturi, itaque corrupti consequatur labore architecto consequuntur odio!</p>
        </div>
         <div className=' dark:bg-slate-900 dark:text-white'> 
         <Slider {...settings}>
        
            {filterBook.map((item)=>(
             <Cards item={item} key={item.id} />
            ))}
        
      </Slider>
         </div> 
    </div>
    </>
  )
}

export default Freebook;