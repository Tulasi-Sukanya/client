import React from 'react'
import Layout from '../Layout/Layout'
import Filtersection from '../../Pages/Filtersection'


const ProductNotAvaialble = () => {
  return (
    <Layout title={"E-Shop Ipads"}>
        <div>
            <section className='filter-section' style={{border:"1px solid grey",width:"fit-content"}}>
                <Filtersection />
            </section>
        <section className='py-3 product-container'>
        <div className='row justify-content-center gap-5 col-ms-10'>
            <h3 style={{position:"absolute",top:"15rem",left:"24rem"}} >Sorry!! Products Not Available..  :)</h3>
        </div>
        </section>
        </div>
    </Layout>
  )
}

export default ProductNotAvaialble