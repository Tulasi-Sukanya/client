import React, { useContext,useState,useEffect } from 'react'
import {store} from '../API/ApiFile'
import ProductCard from '../ProductPages/ProductCard'
import '../../Styles/ProductPage.css'
import Layout from '../Layout/Layout'
import axios from 'axios'
import Filtersection from '../../Pages/Filtersection'
import Loading from '../../Pages/Loading'

const Accessories = (props) =>{
    const [context] =useContext(store);
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(() => {
        setLoading(true)
        axios
          .get("https://mernecommercebackend-7api.onrender.com/get-product")
          .then((res) => {
            console.log(res.data);
            console.log(product);
            setProduct(res.data);
            setLoading(false)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return(
    <Layout title={"E-Shop Accessories"}>
        <div className='container-fluid productpage'>
        <section className='filter-section'>
            <Filtersection />
        </section>
        <section className='py-3 product-container'>
            <div className='row justify-content-center gap-5 col-ms-10'>
            {
                loading?<Loading />:context.filter((Data)=> Data.catagory === "Accessories")
                .map((item,index)=>{
                    return(
                        <ProductCard key={index} image={item.image} name={item.name} price={item.price} oprice={item.oprice} item={item} state={props}/>
                    )
                })
            }
            </div>
        </section>
        </div>
    </Layout>
    )
}

export default Accessories;