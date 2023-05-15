import React from 'react'
import { useCart } from 'react-use-cart'
import Layout from '../Components/Layout/Layout';
import axios from 'axios';

// const API = "http://localhost:8000";

const CartPage = (props) => {
  const {items,isEmpty,totalUniqueItems,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart} = useCart();
    // const Total = items.map((item)=>item.quantity * item.price).reduce((sum,value)=>sum+value,0);
  // const handlePrice =()=>{
  //   let totalAmount=0;
  //   items.map((item)=>{
  //     totalAmount += item.quantity * +item.price
  //   })
  //   setPrice(totalAmount);
  //  };
   
  //  useEffect(()=>{
  //   handlePrice()
  //  });
//payment

const initpayment=(data)=>{
  const options = {
    key: "rzp_test_BVxUHDr29hbUG2", 
    amount: data.amount,
    currency: data.currency,
    name: "E-Store",
    description: "Test Transaction",
    image: "https://cdn4.vectorstock.com/i/1000x1000/96/88/e-letter-volume-blue-and-purple-color-logo-design-vector-9459688.jpg",
    handler: async (response)=>{
       try{
        const verifyUrl = "http://localhost:8000/verify";
        const {data}= await axios.post({verifyUrl,response});
        console.log(data);
       }
       catch(error){
        console.log(error);
       }
    },
    prefill: {
        name: "Sukanya",
        email: "Sukanya271.tulasi@gmail.com",
        contact: "987654321"
    },
    theme: {
        color: "#3399cc"
    }
};
const rzp1 = new window.Razorpay(options);
rzp1.open();
};

const handlepayment = async()=>{
  try{
    const orderUrl = "http://localhost:8000/orders";
    const {data} = await axios.post(orderUrl,{amount:cartTotal});
    console.log(data);
    initpayment(data.data);
  }
  catch(error){
    console.log(error);
  }
};

  return (
    <Layout title={"E-shop Cart"}>
    <div>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {isEmpty ? <h3 style={{textAlign:"center"}}>Your Cart is Empty!!!</h3> : ""}
            <h5 style={{textAlign:"right"}}> TotalItems:({totalItems}) </h5>
            <div className='col-12'>
              <h5>Cart ({totalUniqueItems})</h5>
              <table className='table table-light table-hover n-0'>
                <tbody>
                  {items.map((item,index)=>{
                    return(
                      <tr key={index}>
                      <td>
                        <img src={item.image} style={{height:"6rem"}} alt="error" />
                      </td>
                      <td style={{textAlign:"center",padding:"4%"}}>{item.name}</td>
                      <td style={{textAlign:"center",padding:"4%"}}>{item.price}</td>
                      <td style={{textAlign:"center",padding:"4%"}}> 
                        <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity -1)}>-</button>&nbsp;
                        <b>{item.quantity}</b>
                        <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity +1)}>+</button>&nbsp;
                        <button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)}>Remove Item</button>
                      </td>
                    </tr>
                    )
                })}
                </tbody>
              </table>
            </div>
            <div className='col-auto ms-auto'>
            {/* <h2>Total Price: {price} </h2> */}
            <h2>Total Price: {cartTotal} </h2>
              {/* <h2>Total Price: ${ items.map((item)=>item.quantity * item.price).reduce((sum,value)=>sum+value,0)}</h2> */}
            </div>
            <div className='col-auto'>
              <button className='btn btn-danger m-2' onClick={()=>{emptyCart()}}>Clear Cart</button>
              <button className='btn btn-primary m-2' onClick={()=>{handlepayment()}} >Checkout</button>
            </div>
          </div>
        </section>
    </div>
    </Layout>
  )
}


export default CartPage