"use client"


import Body from "@/components/body";
import Flower from "@/components/flower";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Order from "@/components/order";
import Product from "@/components/product";
import { useEffect, useState } from "react";




export default function Home() {
const [input,setInput]=useState(null)



const handleclick=()=>{
    
    setInput("true")

  }


  
const handleHome=()=>{
    setInput(null)
    // console.log('ankit chuahn')

  }



console.log(input)




  return (
    <>
    <div className="app-main">
     { input==null? ( <>
       <Header />
       <Body handleclick={handleclick}/>
       <Flower></Flower>
       <Product></Product>
       <Footer></Footer></>):''}

       { input==="true" ? (<Order handleHome={handleHome}/>): '' }

    </div>
       
     
    
    </>
  );
}
