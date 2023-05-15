import React from 'react'
import { useCart } from 'react-use-cart'
import Layout from '../Components/Layout/Layout';
import { Link } from 'react-router-dom';

const Wishlist = (props) => {
    const  {addItem} = useCart();
  const {items,isEmpty,totalItems,removeItem} = useCart();

  return (
    <Layout title={"E-shop Wishlist"}>
    <div>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {isEmpty ? <h3 style={{textAlign:"center"}}>No items in Wishlist..</h3> : ""}
            <h5 style={{textAlign:"right"}}> TotalItems:({totalItems}) </h5>
            <div className='col-12'>
              {/* <h5>Cart ({totalUniqueItems})</h5> */}
              <table className='table table-light table-hover n-0'>
                <tbody>
                  {items.map((item,index)=>{
                    return(
                      <tr key={index}>
                      <td>
                        <img src={item.image} style={{height:"6rem"}} />
                      </td>
                      <td style={{textAlign:"center",padding:"4%"}}>{item.name}</td>
                      <td style={{textAlign:"center",padding:"4%"}}>{item.price}</td>
                      <td style={{textAlign:"center",padding:"4%"}}> 
                        <Link to="/cart"><button className='cart-btn' onClick={()=>addItem(props.item)}>Add to Cart</button></Link>&nbsp;&nbsp;
                        <button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)}>Remove Item</button>
                      </td>
                    </tr>
                    )
                })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
    </div>
    </Layout>
  )
}

export default Wishlist