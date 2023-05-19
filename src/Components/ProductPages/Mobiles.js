import React, { useContext , useState,useEffect} from 'react'
import {store} from '../API/ApiFile'
import ProductCard from '../ProductPages/ProductCard'
import '../../Styles/ProductPage.css'
import Layout from '../Layout/Layout'
import Loading from '../../Pages/Loading'
import axios from 'axios'
import Filtersection from '../../Pages/Filtersection'


const Mobiles = (props) =>{
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
    <Layout title={"E-Shop Mobiles"}>
        <div className='container-fluid productpage'>
        <section className='filter-section'>
            <Filtersection />
        </section>
        <section className='py-3 product-container'>
            <div className='row justify-content-center gap-5 col-ms-10'>
            {
                loading?<Loading />:context.filter((Data)=> Data.catagory === "Mobile")
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

export default Mobiles;














// import React, { useContext } from "react";
// // import { Link } from "react-router-dom";
// import { store } from "../API/ApiFile";
// // import ReactStars from "react-rating-stars-component"
// import Layout from "../Layout/Layout";
// import ProductCard from "./ProductCard";

// const Mobiles = (props) =>{
//     const context = useContext(store);
//     const carthandle=(id)=>{
//         context.setcount((preValue)=>{
//           preValue.push(id);
//           console.log(preValue);
//           return preValue;
//         })
//       }
//     return(
//     <Layout title={"E-Shop Mobiles"}>
//         {/* <div className="Product-page">
//             {
//              context.Data.filter((Data)=> Data.catagory === "Mobile")
//                  .map((item,index)=>{
//                      return(
//                          <div className='product-container' key={index}>
//                          <div className='component'>
//                              <div class="product-image">
//                                  <img src={item.image} alt="error" className='item-image'/>
//                              </div>
//                              <div>
//                                  <p className='item-name'>{item.name}</p>
//                              </div>
//                              <div className='product-rating'>
//                                  <img src={item.ratting} alt="error" className='item-rating'/>
//                                  <ReactStars count={5} size={24} value="4" edit={false} activeColor="#ffd700" />
//                              </div>
//                              <div className='item-Price'>
//                                  <span className='item-price'>{item.price}</span>&nbsp;&nbsp;
//                                  <span className='item-oprice'>{item.oPrice}</span>
//                              </div>
//                              <div>
//                                  <Link to="/cart"><button className='cart-btn' onClick={() =>{carthandle(context.Data[index].id)}}>Add to Cart</button>&nbsp;&nbsp;</Link>
//                                  <button className='buy-btn'>Buy Now</button>
//                              </div>
//                          </div>
//                      </div>
//                      )
//                  })
//             }
//         </div> */}
//          <>
//         <div className='category-container'>
//             {
//                 context.filter((Data)=> Data.catagory === "Mobile")
//                 .map((item,index)=>{
//                     return(
//                         <ProductCard key={index} image={item.image} name={item.name} price={item.price} oprice={item.oprice} />
//                     )
//                 })
//             }
//         </div>
//         </>
//     </Layout>
//     )
// }

// export default Mobiles