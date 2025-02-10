import Body from "@/components/body";
import Flower from "@/components/flower";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Product from "@/components/product";



export default function Home() {
  return (
    <>
    <div className="app-main">
       <Header></Header>
       <Body></Body>
       <Flower></Flower>
       <Product></Product>
       <Footer></Footer>

    </div>
       
     
    
    </>
  );
}
