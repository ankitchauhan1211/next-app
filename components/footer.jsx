// import  { useState } from 'next';
import './footer.css'

export default function Footer() {
const rev=[

  {
    image: 'https://demo.blumox.com/andblooms/assets/images/svg/user1.svg',
    name: 'Rahul Kaumar',
    imag2: "https://demo.blumox.com/andblooms/assets/images/svg/star.svg",
    description: "Lorem Lipsum is simple dummy text of printing and typesetting industrt. 1500, lipsum is typesetting industry.",
    readMore :'Read More',
    shortname: 'Lorem lpsum',
    index:'index1'


  },
  {
    image: 'https://demo.blumox.com/andblooms/assets/images/svg/userimg2.svg',
    name: 'Goruv Kaumar',
    imag2: "https://demo.blumox.com/andblooms/assets/images/svg/star.svg",
    description: "Lorem Lipsum is simple dummy text of printing and typesetting industrt. 1500, lipsum is typesetting industry.",
    readMore :'Read More',
    shortname: 'Lorem lpsum',
    index:'index1'

  },
  {
    image: 'https://demo.blumox.com/andblooms/assets/images/svg/userimg3.svg',
    name: 'Ravi Kaumar',
    imag2: "https://demo.blumox.com/andblooms/assets/images/svg/star.svg",
    description: "Lorem Lipsum is simple dummy text of printing and typesetting industrt. 1500, lipsum is typesetting industry.",
    readMore :'Read More',
    shortname: 'Lorem lpsum',
    index:'index1'

},{
  image: 'https://demo.blumox.com/andblooms/assets/images/svg/user1.svg',
  name: 'Rahul Kaumar',
  imag2: "https://demo.blumox.com/andblooms/assets/images/svg/star.svg",
  description: "Lorem Lipsum is simple dummy text of printing and typesetting industrt. 1500, lipsum is typesetting industry.",
  readMore :'Read More',
  shortname: 'Lorem lpsum',
  index:'index2'

},
{
  image: 'https://demo.blumox.com/andblooms/assets/images/svg/userimg2.svg',
  name: 'Goruv Kaumar',
  imag2: "https://demo.blumox.com/andblooms/assets/images/svg/star.svg",
  description: "Lorem Lipsum is simple dummy text of printing and typesetting industrt. 1500, lipsum is typesetting industry.",
  readMore :'Read More',
  shortname: 'Lorem lpsum',
  index:'index3'

},{
  image: 'https://demo.blumox.com/andblooms/assets/images/svg/userimg3.svg',
  name: 'Ravi Kaumar',
  imag2: "https://demo.blumox.com/andblooms/assets/images/svg/star.svg",
  description: "Lorem Lipsum is simple dummy text of printing and typesetting industrt. 1500, lipsum is typesetting industry.",
  readMore :'Read More',
  shortname: 'Lorem lpsum',
  index:'index4'

}
]
const ind=[
  {
    index:'index1'
  },
  {
    index:'index2'
  },
  {
    index:'index3'
  },
  {
    index:'index4'
  }
]

// const [change,setchange]= useState('true');
// const [brown,setbrown]=useState('#FFF9F5');
// useEffect( ()=>{
//   if(change=='true'){
//     setbrown('#71404B')
//   }
//   if(change=='false'){
//     setchange("#FFF9F5")
//   }
  
// },[change])

// const changfunc=()=>{
//    setchange("true");
// }






  return (
    <>
    <div className='footer-main'>
        <div className="footer-text">
            <h1>Our Customer Review</h1>
        </div>
        <div className="review-container">
          {rev.map(({image,name,imag2,description,readMore,shortname,index})=>{
            return <><div className='review-box' id={index} >
              <div className="img-b">
                <img src={image} alt="" />
                <div className="start">
                <h1>{name}</h1>
                <p>{shortname}</p>
                <div>
                <img src={imag2} alt="" />
                <img src={imag2} alt="" />
                <img src={imag2} alt="" />
                <img src={imag2} alt="" />
                <img src={imag2} alt="" />
                </div>
                </div>
                
              </div>

              <div className="desc">
                <p>{description}</p>
              </div>
              <div className='readmore'>
                {readMore}</div>

              
            </div>
           
          </>

              


          })}
         

        

        </div>
    <div className="btn-1">

      { ind.map(({index})=>{
         return <div className="buttons">
         <a href={'#'+index} ></a>
         </div>
         })
       }
    </div>

    </div>
    <div className="bottom">
     <div className="subbottom">
      <div className="bottom1">
      <img src="https://demo.blumox.com/andblooms/assets/images/svg/andbloom.svg" alt="" />
      <p>Lorem ipsum dolor sit amet elit. nec odio. Praes amet elit. Integer ne Lorem ipsum dolor sit amet elit. nec odio.</p>

      </div>
      <div className="bottom2">
        <h1>Quick links</h1>
        <ol>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Workshop</a></li>
          <li><a href="">Cancellation & Refund</a></li>
          <li><a href="">Term & Condition</a></li>
          <li><a href="">Privacy Policy</a></li>
        </ol>
      </div>
      <div className="bottom2">
      <h1>Product</h1>
        <ol>
          <li><a href="">Luxury Collection</a></li>
          <li><a href="">Cake & Hampers</a></li>
          <li><a href="">Planters</a></li>
          <li><a href="">Valentine's Day</a></li>
          
        </ol>
      </div>
      <div className="bottom2">
      <h1>Quick links</h1>
        <ul>
          <li><a href=""><img src="https://demo.blumox.com/andblooms/assets/images/svg/map.svg" alt="" />1/1 Lorem ispsum prasent 19</a></li>
          <li><a href=""><img src="https://demo.blumox.com/andblooms/assets/images/svg/email.svg" alt="" />loremipsum@Gmail.com</a></li>
          <li><a href=""><img src="https://demo.blumox.com/andblooms/assets/images/svg/call.svg" alt="" />+91 9999XXXXXX</a></li>
         
        </ul>
      </div>
     
      </div>
    
      </div>
      <div className="line">
        <img src="https://demo.blumox.com/andblooms/assets/images/svg/payment.svg" alt="" />
        <h1>© 2020-2024 &Blooms Fresh & Hand-tied Luxury Flowers, Accessories & beyond. All Rights Reserved</h1>

      </div>

     
      
      

      
      




      
    
    </>
  )
}
// value={brown} style={{backgroundColor : brown} } onClick={changfunc}