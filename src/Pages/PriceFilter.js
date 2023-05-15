import React, { useState,useContext } from "react";
import ProductCard from '../Components/ProductPages/ProductCard'
import '../Styles/ProductPage.css'
import Layout from '../Components/Layout/Layout'
import Filtersection from './Filtersection'
import { store } from "../Components/API/ApiFile";

// {handleInput}
export default function PriceFilter() {
    const [context] =useContext(store);
  const [ price, setPrice ] = useState(40);
 const handleInput = (e)=>{
    setPrice( e.target.value );
  }
  return (
    <Layout title={"E-Shop"}>
    <div className='container-fluid productpage'>
    <input type="range" onInput={ handleInput } />
    {/* //   <h1>Price: { price }</h1> */}
    <section className='filter-section'>
        <Filtersection />
    </section>
    <section className='py-3 product-container'>
        <div className='row justify-content-center gap-5 col-ms-10'>
        {
            context.filter((Data)=> {return(Data.price > parseInt(price,10))})
            .map((item,index)=>{
                return(
                    <ProductCard key={index} image={item.image} name={item.name} price={item.price} oprice={item.oprice} item={item} />
                )
            })
        }
        </div>
    </section>
    </div>
</Layout>
  );
}
