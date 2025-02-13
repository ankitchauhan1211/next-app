import React from 'react'
import './body.css';
import Order from './order';


export default function Body({handleclick}) {
  // console.log(handleclick)
  return (
    <div className='bodymain'>
       
         <div className="text">
            <h1>Handblooms For Your <br />Soulmate</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Alias mollitia est, reiciendis, </p>
            <button onClick={(e)=>{handleclick()}}>Order Now</button>
         </div>
         <div className='textcenter' >
              <h1>Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
   
         </div>


      
    </div>
  )
}
