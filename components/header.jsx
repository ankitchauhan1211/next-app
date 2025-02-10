import React from 'react';
import svg from './andbloom.svg' ;
import './header.css';

export default function Header() {
  return (
    <>
    <div  className='header'>
        <div className="image"> <img src='https://demo.blumox.com/andblooms/assets/images/svg/andbloom.svg' alt="jcvjg"/></div>
        <div className="tools">
          <div className="inputsitm"> <div className="input "><input type="text"  placeholder='Search'/></div>
            <div className="search box"><a href=""><img src="https://demo.blumox.com/andblooms/assets/images/svg/search.svg" alt="" /></a></div> </div> 
            <div className='icon'>  <div className="lock box"><a href=""><img src="https://demo.blumox.com/andblooms/assets/images/svg/lock.svg" alt="" /> </a></div><div className='Ntf'>2</div> </div>
            <div className="admin box"><a href=""><img src="https://demo.blumox.com/andblooms/assets/images/svg/user.svg" alt="" /></a></div>
            {/* <div className="hamburg box"><a href=""><img src="" alt="" /></a></div> */}
            </div>
    </div>
    <div className='hamburg2'>
        <ul>
            <li>Home</li>
            <li>Luxury Collection </li>
            <li>Occasions</li>
            <li>Planters</li>
            <li>Cakes & Hampers</li>
            <li>Blooms Of January</li>
            <li>Valentine's</li>
            <li>Subscription</li>
        </ul>
        
    
    </div>
    </>
  )
} 
