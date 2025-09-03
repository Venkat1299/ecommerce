import { Navbar } from "../../components";
import { ProductCard } from "../../components";
import {Fragment,useEffect,useState} from "react";
import axios from "axios";
import "./Home.css";
import {useCart} from "../../context/cart-context";
export const Home=()=>{
    const {cart}=useCart();
    console.log(cart);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        (async()=> {
            try{
                const{data:{books}}=await axios.get("/data.json");
                setProducts(books);
                }catch(error){
                    console.log(error)
                }
        })()
    },[])
    return(
        <Fragment>
            <Navbar/>
            <main className="main">
                {
                    products.map(product=><ProductCard key={product.id} product={product}/>)
                }
            </main>
           
        </Fragment>
    )
}