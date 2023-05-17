import React from 'react'
import Layout from '../Components/Layout/Layout'
import Slider from './Slider'
import ProductLoadMore from './ProductLoadMore'

const Home = () => {
  // const [context] =useContext(store);
  return (
    <Layout title={"Home"}>
    <div>
      <Slider />
      <h3 className='text-center'>OUR SERVICES</h3>
      <div className='eshop-guidelines d-flex align-items-center justify-content-center p-4 gap-4'>
        <div className='home-card bg-light p-3'>
          <h6 className='text-center'>Free Shipping</h6>
          <img src="https://cdn.shopify.com/s/files/1/1992/1057/files/Adult_weighted_blanket_free_delivery_480x480_b25ffd4d-7c0d-43da-9fc3-2d3b2aff06d1_480x480.jpg?v=1518452518" alt="error" style={{height:"7rem",width:"7rem",marginLeft:"12rem"}} />
          <p>All over India Free Shipping Available with good package.On Bulk orders Special discounts will be applied.Extra Shipping Charges applicable for other Countries.</p>
        </div>
        <div className='home-card bg-light p-3'>
        <h6 className='text-center'>Quality Assurance</h6>
        <img src="https://gonzalezeagleroofing.com/wp-content/uploads/2017/03/quality-guarantee-gold-seal-gonzalez-eagle-roofing.png" alt="error" style={{height:"7rem",width:"7rem",marginLeft:"7.7rem"}} />
        <p>We Provide high Quality assured Products.We maintain our Quality Standards.Warranty applicable for all Products.</p>
        </div>
        <div className='home-card bg-light p-3'>
          <h6 className='text-center'>Trendy Products</h6>
          <img src="https://thumbs.dreamstime.com/z/clock-gear-vector-icon-filled-flat-sign-mobile-concept-web-design-time-setup-simple-solid-symbol-logo-illustration-pixel-121018500.jpg" alt="error" style={{height:"7rem",width:"7rem" ,marginLeft:"8rem"}} />
          <p>We focus on finding trending products.So, all latest trendy products available in E-shop.New Launch products are up to dated..</p>
        </div>
      </div>
      <ProductLoadMore />
    </div>
    </Layout>
  )
}
export default Home