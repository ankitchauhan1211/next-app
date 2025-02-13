import { useEffect, useState } from "react";
import Header from "./header";
import './order.css'
import Footer from "./footer";




export default function Order({handleHome}) {
    

    const [value,setValue]=useState(null)
    const [color,setColor]=useState('white')
    useEffect(()=>{
        if(value=="true"){
            setColor('green') 
        }
    }    
    ,[value])
    
   

    

    
  return (
    <div className="order_main">
      <Header ></Header>
      <button onClick={()=>{handleHome()}}>Back</button>
      <div className="input_grid">
      <form className="form">
       
        <div className="container1">
     

            <div className="sub_container2">
            <div className="sub_box4">
               <h1>Delivery</h1>
               <input  className='input1' list="browsers" placeholder="Country/Region" type="text"/>
               <datalist id="browsers">
                 <option value="Country/region"></option>
                 <option value="India"></option>
                 <option value="Nepal"></option>
                </datalist>


            </div>
            
             <div className="sub_box_2"> 
                <input type="text" placeholder="First name"/>
                <input type="text" placeholder="Last name"/>
            </div>
            <div className="sub_box_2">
               <input type="text"placeholder="Address" />
               <input type="text" placeholder="Add apartment,suite,etc."/>
            </div>
            <div className="sub_box_3">
               <input type="text"placeholder="city" />
               <input type="text" placeholder="State" list="state"/>
               <input type="text" placeholder="Zip code"/>
               <datalist id="state">
                 <option value="State"></option>
                 <option value="Delhi"></option>
                 <option value="Mumbai"></option>
                 </datalist>
            </div>
             
             <div className="right_box"><input className="tick" style={{backgroundColor: color}} type="text"  onClick={(e)=>{setValue('true')}} /><p>Ship to different address?</p></div>
            </div>


           
    <div className="sub_container1">
        <h1>Order notes(optional)</h1>
        <textarea placeholder="Notes About Your Order,Eg.Special Notes For Delievery"></textarea>
        <button>Continue</button>
    </div>


        </div>
        <div className="container2">
            <div className="container2_box1">
                <div className="imgsection">
                 <div className="image_b">
                    <img src="https://demo.blumox.com/andblooms/assets/images/svg/flowerimg.svg" alt="" />
                    <div className="s-box">2</div>
                 </div>
                 <div className="text_b">
                 <h1>Jet Set Tulips</h1>
                 <p>Lorem</p>
                 </div>
                
                </div>
             
                <input type="text" placeholder="Discount code"/>
                <h1>Sub total</h1>
                <h1>Shipping</h1>
                <h1>Total</h1>

            </div>
            <div className="container2_box2">
                <h1>₹ 3390.0</h1>
                <button>Apply</button>
                <h2>₹ 3390.0</h2>
                <h3>Free shipping</h3>
                <h4>₹ 3390.0</h4>

            </div>

        </div>
  
        </form>
      </div>
     <Footer></Footer>

    </div>

  )
}
