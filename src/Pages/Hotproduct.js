import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import '../Styles/ProductCard.css'
import { useCart } from 'react-use-cart'

const Hotproduct = (props) => {
    const  {addItem} = useCart();
  return (
    <>
    <div className='product-card col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className="badge" style={{ position: "absolute",right:"-6%",top:"4%",fontWeight:"700",background:"red",
    color: "#fff",padding:"3px 10px",transform: "rotate(40deg)"}}>HOT</div>
        <div className='card p-0 overflow-hidden h-100 shadow'>
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
                    <Link to="https://rzp.io/l/qAaQdQR" ><button className='buy-btn'>Buy Now</button></Link>&nbsp; 
                    <Link to="/cart"><button className='cart-btn' onClick={()=>addItem(props.item)}>Add to Cart</button></Link>
                </div>    
            </div>     
        </div>
    </div>
    </>
  )
}

export default Hotproduct;

