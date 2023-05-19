import React, { useContext,useEffect,useState } from 'react'
import {store} from '../API/ApiFile'
import ProductCard from '../ProductPages/ProductCard'
import '../../Styles/ProductPage.css'
import Layout from '../Layout/Layout'
import axios from 'axios'
import Loading from '../../Pages/Loading'
import Filtersection from '../../Pages/Filtersection'

const All = (props) =>{
    const [context] =useContext(store);
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true)
        axios
          .get("https://mernecommercebackend-7api.onrender.com/get-product")
          .then((resolve) => {
            console.log(resolve.data);
            setProduct(resolve.data);
            setLoading(false)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return(
    <Layout title={"E-Shop All"}>
        <>
        <div className='container-fluid productpage'>
        <section className='filter-section'>
            <Filtersection />
        </section>
        <section className='py-3 container '>
            <div className='row justify-content-center gap-5 col-ms-10'>
            {
                loading?<Loading />:context.filter((Data)=> Data.id >= 1).map((item,index)=>{
                    return(
                        <ProductCard key={index} image={item.image} name={item.name} price={item.price} oprice={item.oprice} item={item} />
                    )
                })
            }
            </div>
        </section>
        </div>
        </>
    </Layout>
    )
}

export default All;


