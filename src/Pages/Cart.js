import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart,decreaseQuantity,AddingtoCart,clearCart, getTotals } from "../Reduxxx/Slice";
import {useEffect} from 'react';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(getTotals())
  },[cart,dispatch])
  const removeItem=(item)=>{
    dispatch(removeFromCart(item))
  }
  const decreaseItem=(item)=>{
    dispatch(decreaseQuantity(item))
  }
  const increaseItem=(item)=>{
    dispatch(AddingtoCart(item))
  }
  const clearAllItems=(item)=>{
    dispatch(clearCart(item))
  }
  return (
    <div id="cartItems">
      <h2 id="Shopheading">CART-DETAILS</h2>
      {cart.products.length === 0 ? (
        <div id="cartContainer">
          <code id="Cartlist">Cart is Currently Empty</code>
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzibBVD9w_go7Ofo5BK44_ufJf_y7qQAoPKg&usqp=CAU"} alt="404_ERROR"/>
          <div id="reboot">
            <Link to="/store" id="linkStore">
              <span >Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div >
         <hr/>
            <div id="cartbox">
              <div id="sn"><h3>S.NO</h3></div>
              <div><h3>PRODUCT</h3></div>
              <div><h3>PRICE</h3></div>
              <div><h3>QUANTITY</h3></div>
              <div><h3>TOTAL</h3></div>
            </div>
            <hr/>
            <div >
              {cart.products?.map((item,index) => (
                <div key={item.id} id="cartbox2">
                  <div id="sn">{index+1}</div>
                  <div id="productdetails">
                    <img src={item.url} width={180} height={180} alt="404_ERROR" />
                    <div>
                      <h4>{item.Name}</h4>
                      <div>{item.Catagory}</div>
                      <div>{item.Rating}</div>
                      <button id="remove" onClick={()=>removeItem(item)}>Remove</button>
                    </div>
                  </div>
                  <div>
                    <div className="amount1">$ {item.New_Price}</div>
                  </div>
                  <div id="cartQuantity">
                      <div><button className="nutton" onClick={()=>decreaseItem(item)}>-</button></div>
                      <div className="amount">{item.productQuantity}</div>
                      <div><button className="nutton1"  onClick={()=>increaseItem(item)}>+</button></div>
                  </div>

                  <div className="amount2">
                    ${item.New_Price*item.productQuantity}
                  </div>
                </div>
              ))}
            </div>
            <hr/>
            <h4 className="amountTotal">Total Amount : <h2><span>$</span>{cart.cartTotalAmount}</h2></h4>
            <div id="btnthree">
                <button onClick={()=>clearAllItems()}>Clear Cart</button>
                <button>Continue Shopping</button>
                <button>Proceed to Payment</button>
            </div>
          </div>

        </>
      )}
    </div>
  );
};
export default Cart;







// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios"
// const cartCtx = createContext();
// //backend url
// const API = "http://localhost:8000";

// export default function App() {
//   const [isOpen,setIsOpen] = useState(false);
//   const [mobiles, setMobiles] = useState([]);

//   useEffect(() => {
//     fetch(`${API}/mobiles`)
//       .then((data) => data.json())
//       .then((mobile) => setMobiles(mobile));
//   }, []);

//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     fetch(`${API}/cart`)
//       .then((data) => data.json())
//       .then((cartlist) => setCart(cartlist));
//       console.log(cart);
//   }, [cart]);

//   const updateCart = ({ mobile, type }) => {
//     fetch(`${API}/cart?type=${type}`,{
//       method:'PUT',
//       body: JSON.stringify(mobile),
//       headers:{
//         "Content-Type":"application/json"
//       },}).then((data) => data.json())
//       .then((cartlist) => setCart(cartlist));

//   };

//   return (
//     <div>
//       <cartCtx.Provider value={[cart, mobiles, updateCart]}>
//         <div className="container">
//           <div className="logo">
//             <h3>E-Shop</h3>
//           </div>
//           <div className="cart-button">
//             <button className="cart-button" onClick={()=>setIsOpen(!isOpen)}>Cart</button>
//           </div>
//         </div>
//         <PhoneList />
//         <div className="cart-container">
//           {isOpen ? <CartList /> : '' }
//         </div>
//       </cartCtx.Provider>
//     </div>
//   );
// }

// function PhoneList() {
//   const [, mobiles] = useContext(cartCtx);
//   return (
//     <div className="phone-list-container">
//       {mobiles.map((mobile, index) => (
//         <Phone mobile={mobile} key={index} />
//       ))}
//     </div>
//   );
// }

// function Phone({ mobile }) {
//   const [, , updateCart] = useContext(cartCtx);
//   return (
//     <div className="phone-cotainer">
//       <img src={mobile.img} alt={mobile.model} className="phone-img" />
//       <h2 className="phone-name">{mobile.model}</h2>
//       <p>{mobile.company}</p>
//       <h2>Price: {mobile.price}</h2>
//       <button onClick={() => updateCart({ mobile, type: "increment" })}>
//         Add-to-Cart
//       </button>
//     </div>
//   );
// }

// function CartList() {
//   const [cart] = useContext(cartCtx);
//   useEffect(()=>{},[cart]);

//   const total = cart.map((item)=>item.qty * item.price).reduce((sum,value)=>sum+value,0);
//   return (
//     <div className="cart-phone-list-container">
//       <h1>Cart List</h1>
//       {cart.map((mobile) => (
//         <CartItem mobile={mobile} key={mobile._id} />
//       ))}
//       <h2>total:{total}</h2>
//       <button onClick={handlepayment}>Checkout</button>
//     </div>
//   );
// }

// function CartItem({ mobile }) {
//   const [, , updateCart] = useContext(cartCtx);
//   return (
//     <div className="cart-item-container">
//       <img src={mobile.img} alt={mobile.model} className="phone-img" />
//       <div>
//         <h2 className="cart-item-name">{mobile.model}</h2>
//         <p className="cart-item-company">{mobile.company}</p>
//         <p className="cart-item-quantity">
//           <h2>Price: {mobile.price}</h2>
//           <button onClick={() => updateCart({ mobile, type: "increment" })} className="cart-=item-plus-btn">
//             +
//           </button>
//           <span>&nbsp; Quantity: &nbsp;</span>
//           {mobile.qty}
//           &nbsp;
//           <button onClick={() => updateCart({ mobile, type: "decrement" })} className="cart-item-minus-btn">
//             -
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// //payment

// const initpayment=(data)=>{
//   const options = {
//     key: "YOUR_KEY_ID", 
//     amount: data.amount,
//     currency: data.currency,
//     name: "E-Shop",
//     description: "Test Transaction",
//     image: "https://example.com/your_logo",
//     handler: async (response)=>{
//        try{
//         const verifyUrl = "http://localhost:8000/api/payment/verify";
//         const {data}= await axios.post({verifyUrl,response});
//         console.log(data);
//        }
//        catch(error){
//         console.log(error);
//        }
//     },
//     prefill: {
//         name: "Sukanya",
//         email: "Sukanya@gmail.com",
//         contact: "987654321"
//     },
//     theme: {
//         color: "#3399cc"
//     }
// };
// const rzp1 = new window.Razorpay(options);
// rzp1.open();
// };

// const handlepayment = async()=>{
//   try{
//     const orderUrl = "http://localhost:8000/api/payment/orders";
//     const {data} = await axios.post(orderUrl,{amount:total});
//     console.log(data);
//     initpayment(data.data);
//   }
//   catch(error){
//     console.log(error);
//   }
// };