import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { useLocation } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import '../../Styles/singleProductpage.css'


const SingleProductPage = (props) => {
    const loc = useLocation()
    console.log(loc);
    const data=loc.state.item;
    console.log(data);
    const  {addItem} = useCart();
  return (
    <Layout title={"E-Shop"}><br/><br/>
        <div className='singleproduct d-flex align-items-center justify-content-center py-9'>
            <div className="card align-center gap-1">
                <div className="card_title">
                    {/* <div className="icon">
                        <Link to="/all"><i className="fa fa-arrow-left"></i></Link>
                    </div> */}
                    <h3 className='text-center' style={{color:"brown"}}>{data.name}</h3>
                </div>
                <div className="card__body">
                    <div className="half">
                        <div className="image align-left">
                            <img src={data.image} style={{height:"8.5rem",width:"8.5rem"}} alt="error" />
                        </div>
                        <div className="featured_text align-center" style={{fontWeight:"bold",marginLeft:"3rem"}}>
                            <span className="price">Rs {data.price}/-</span>&nbsp;&nbsp;<br/>
                            <span className="oprice" style={{color:"grey",textDecoration:"line-through"}}>{data.oprice}</span>
                        </div><br/>
                    </div>
                    <div className="half">
                        <div className="description">
                            <p>FEATURES:</p>
                            <p><li>Good Picture Quality</li><li>Good Sound Quality</li><li>Multiple USB ports</li><li>Gaming</li><li>Voice Control</li></p>
                        </div>
                        <div className="reviews">
                            <p className='product-rating'><ReactStars count={5} size={24} value="4" edit={false} activeColor="#ffd700" />(64 reviews)</p><br/>
                        </div>
                    </div>
                </div>
                <div className="action">
                    <Link to="/cart"><button type="button" onClick={()=>addItem(data.item)} className='btn btn-primary'>Add to cart</button></Link>&nbsp;&nbsp;
                    <Link to="/"><button type="button" className='btn btn-secondary'>Buy Now</button></Link>
                </div>
            </div>
        </div><br/>
    </Layout>
  )
}

export default SingleProductPage

 