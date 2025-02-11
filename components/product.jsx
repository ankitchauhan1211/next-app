import './product.css';

export default function Product() {
const obj=[
    {
        image: 'https://demo.blumox.com/andblooms/assets/images/svg/feature1.svg',
        name: 'Valentine'
      
    },
    {
        image : 'https://demo.blumox.com/andblooms/assets/images/svg/feature2.svg',
        name: 'Valentine'
    },
    {
        image: 'https://demo.blumox.com/andblooms/assets/images/svg/feature3.svg',
        name: 'Valentine'
    },
    {
        image : 'https://demo.blumox.com/andblooms/assets/images/svg/feature4.svg',
        name: 'Valentine'
    }
]

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
    <div className="product-main">
    <div className='product-header'>
        <div className="product-text">
            <h1>Featured Categories</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="new-product">
            { obj.map(({image,name})=>{
               return <div className="product-image">
                <img src={image} alt="" />
                <h1>{name}</h1>

               </div>


            })

            }


        </div>
        <div className="product-main-text">
            <h1>Latest product</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="product-main-2">

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
    </div>
  )
}
