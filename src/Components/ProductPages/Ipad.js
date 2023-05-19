import React, { useContext, useState ,useEffect} from 'react'
import axios from 'axios'
import {store} from '../API/ApiFile'
import ProductCard from '../ProductPages/ProductCard'
import '../../Styles/ProductPage.css'
import Layout from '../Layout/Layout'
import Loading from '../../Pages/Loading'
import Filtersection from '../../Pages/Filtersection'


const Ipad = (props) =>{
    const [context] =useContext(store);
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true)
        axios
          .get("https://mernecommercebackend-7api.onrender.com/get-product")
          .then((res) => {
            console.log(res.data);
            setProduct(res.data);
            setLoading(false)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return(
    <Layout title={"E-Shop"}>
        <div className='container-fluid productpage'>
        <section className='filter-section'>
            <Filtersection />
        </section>
        <section className='py-3 product-container'>
            <div className='row justify-content-center gap-5 col-ms-10'>
            {
                loading?<Loading />:context.filter((Data)=> Data.catagory === "Ipad")
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

export default Ipad;