import './flower.css';


export default function Flower() {
  const object = [
      {
        image: 'https://demo.blumox.com/andblooms/assets/images/svg/flowerimg1.svg',
        topic: 'Lorem lpsum',
        Description : 'Consecterur',
        cost : 'Rs 9000.0'
      },
      {
        image: 'https://demo.blumox.com/andblooms/assets/images/svg/flowerimg3.svg',
        topic: 'Lorem lpsum',
        Description : 'Consecterur',
        
        cost : 'Rs 9000.0'
      },
      {
        image: 'https://demo.blumox.com/andblooms/assets/images/svg/flowerimg4.svg',
        topic: 'Lorem lpsum',
        Description : 'Consecterur',
        cost : 'Rs 9000.0'
      },
      {
        image: 'https://demo.blumox.com/andblooms/assets/images/svg/flower-1.svg',
        topic: 'Lorem lpsum',
        Description : 'Consecterur',
        cost : 'Rs 9000.0'
      },
      {
        image: 'https://demo.blumox.com/andblooms/assets/images/svg/flowerimg1.svg',
        topic: 'Lorem lpsum',
        Description : 'Consecterur',
        cost : 'Rs 9000.0'
      },
      {
        image: 'https://demo.blumox.com/andblooms/assets/images/svg/flowerimg3.svg',
        topic: 'Lorem lpsum',
        Description : 'Consecterur',
        cost : 'Rs 9000.0'
      },
      {
        image: 'https://demo.blumox.com/andblooms/assets/images/svg/flowerimg4.svg',
        topic: 'Lorem lpsum',
        Description : 'Consecterur',
        cost : 'Rs 9000.0'
      },
      {
        image: 'https://demo.blumox.com/andblooms/assets/images/svg/flower-1.svg',
        topic: 'Lorem lpsum',
        Description : 'Consecterur',
        cost : 'Rs 9000.0'
      }
    
  ];
    
   



  return (
    <>
    <div className='flowermain'>
        <div className="image1">
          
          <div className="image-lipsum-1">
              <div className="boxin">
              <h3>Flower For Lorem Ipsum</h3>
              <h2>Save upto 20% off</h2>
              <button>Shop Now</button>
              </div>
          </div>
          <div className="image1-3">
          <img  className='img'src="https://demo.blumox.com/andblooms/assets/images/svg/img2.svg" alt="" />
          <img  className='img' src="https://demo.blumox.com/andblooms/assets/images/svg/img2.svg" alt="" />
          </div>
          
          
          <div className="image-lipsum-2">
                 <div className="boxin">
                  <h3>Flower For Lorem Ipsum</h3>
                  <h2>Save upto 20% off</h2>
                 </div>
          </div>

        </div>


      
    </div>
    <div className="flowermain-2">
      <div className="text-2">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
     <div className="sales-container">

      {  object.map(({image ,topic ,Description ,cost} )=>{
        return <div className="product">
          <div className="imagecontainer"> <img src={image} alt="" /></div>
         
          <h1>{topic}</h1>
          <p>{Description}</p>
          <h3>{cost}</h3>
        </div>
      
      }

      )

      }

     </div>

    </div>
    <div className="flowermain3">
       <div className="imgbox"> <img src="https://demo.blumox.com/andblooms/assets/images/svg/valentine.svg" alt="" /></div>
       <div className="textbox">
        <h1>Offer for  <br /> valentines day</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel elit ,consequat arcuLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel elit ,consequat .</p>
        <h3>Save upto 20% off</h3>
        <button>shop Now</button>
       </div>
    </div>


    </>
  )
}
