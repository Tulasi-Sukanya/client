import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import '../../Styles/ProductCard.css'
// import {store} from '../API/ApiFile'
// import { useCart } from 'react-use-cart'
import { useCart } from 'react-use-cart'

const ProductCard = (props) => {
    // const [context] =useContext(store);
    const  {addItem} = useCart();
    // const carthandle = (id) =>{
    //     context.setCount((prevvalue)=>{
    //         prevvalue.push(id);
    //         console.log(prevvalue);
    //     })
    // }
  return (
    <>
    <div className='product-card col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className='card p-0 overflow-hidden h-100 shadow'>
            <div className="badge">Hot</div>
            <div className="product-image card-img-top img-fluid">
                <img src={props.image} alt="error" className='item-image'/>
            </div>
            <div className='product-body text-center'>
                <Link to="/singleproduct" style={{"textDecoration":"none"}} state={props}><h6 className='item-name'>{props.name}</h6></Link>
                <p className='product-rating'><ReactStars count={5} size={24} value="4" edit={false} activeColor="#ffd700" /></p>
                
                <div className='product-price'>
                    <b><span className='item-price'>Rs.{props.price}</span></b>&nbsp;&nbsp;
                    <span className='item-oprice'>{props.oprice}</span>
                </div>
                <div className='btn-actions'>
                    <Link to="/cart"><button className='cart-btn' onClick={()=>addItem(props.item)}>Add to Cart</button></Link>&nbsp;&nbsp;
                    <Link to="/" ><button className='buy-btn'>Buy Now</button></Link> 
                </div>  
        </div>
        </div>
    </div>
    </>
  )
}

export default ProductCard


{/* <div className='product-card col-11 col-md-6 col-lg-3 mx-0 mb-4'>
<div className='card p-0 overflow-hidden h-100 shadow'>
<div className="product-image card-img-top img-fluid">
    <img src={props.image} alt="error" className='item-image'/>
</div>
<div className='product-body'>
    <h5 className='item-name'>{props.name}</h5>
</div>
<div className='product-rating'>
    <img src={props.ratting} alt="error" className='item-rating'/>
    <p><ReactStars count={5} size={24} value="4" edit={false} activeColor="#ffd700" /></p>
</div>
<div className='product-price'>
    <b><span className='item-price'>{props.price}</span></b>&nbsp;&nbsp;
    <span className='item-oprice'>{props.oprice}</span>
</div>
<div>
    <Link to="/cart"><button className='cart-btn' onClick={()=>carthandle(props.item)}>Add to Cart</button>&nbsp;</Link>
    <Link to="/" ><button className='buy-btn'>Buy Now</button></Link>
</div>
</div> */}