import React from 'react'
import { NavLink,Link } from 'react-router-dom'
// import {totaluniqueItems} from '../../Psages/CartPage'
// import SearchInput from '../Forms/Searchinput'
// import  toast  from 'react-hot-toast';

const Header = () => {
  // const [auth,setAuth]=useAuth();
  // const [cart] = useCart();
  // const handleLogout =()=>{
  //   setAuth({
  //     ...auth,user:null,
  //     token:""
  //   });
  //   localStorage.removeItem("auth");
  // toast.success("Logout Successfull!!!")
  // }
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to="/">🛒 <img src="https://cdn4.vectorstock.com/i/1000x1000/96/88/e-letter-volume-blue-and-purple-color-logo-design-vector-9459688.jpg" alt='error' style={{height:"1.5rem",width:"1.5rem"}}/>-Store</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* <SearchInput /> */}
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 ms-2 d-inline-block" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item text-white" to="/all">All</Link></li>
                  <li><Link className="dropdown-item text-white" to="/ipad">Ipad</Link></li>
                  <li><Link className="dropdown-item text-white" to="/mobiles">Mobiles</Link></li>
                  <li><Link className="dropdown-item text-white" to="/macbook">MacBook</Link></li>
                  <li><Link className="dropdown-item text-white" to="/laptop">Laptop</Link></li>
                  <li><Link className="dropdown-item text-white" to="/accessories">Accessories</Link></li>
                  <li><Link className="dropdown-item text-white" to="/tv">Televisions</Link></li>
                </ul>
              </div>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">Cart
            {/* Cart{totaluniqueItems} */}
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/wishlist">Wishlist</NavLink>
        </li> */}
        <li>
          {/* <NavLink onClick={handleLogout} to="/logout" className="dropdown-item">Logout</NavLink> */}
          <NavLink to="/logout" className="nav-link">Logout</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* <header className='header-main'>
      <div className='main-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu d-flex align-items-center gap-60'>
              <div>
              <div className="dropdown">
                <img  src="#" alt=""/>
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 ms-2 d-inline-block" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop Categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item text-white" to="/allproducts">All</Link></li>
                  <li><Link className="dropdown-item text-white" to="/ipad">Ipad</Link></li>
                  <li><Link className="dropdown-item text-white" to="/mobiles">Mobiles</Link></li>
                  <li><Link className="dropdown-item text-white" to="/macbook">MacBook</Link></li>
                  <li><Link className="dropdown-item text-white" to="/laptop">Laptop</Link></li>
                  <li><Link className="dropdown-item text-white" to="/accessories">Accessories</Link></li>
                  <li><Link className="dropdown-item text-white" to="/tv">Televisions</Link></li>
                </ul>
              </div>
              </div>
              <div className='menu-links navbar-nav ms-auto mb-2 mb-lg-0'>
                <div className='routes-container d-flex align-items-right gap-3'>
                  <Link to="/ipad" className='nav-link'>Ipad</Link>
                  <Link to="/macbook" className='nav-link'>Macbook</Link>
                  <Link to="/laptop" className='nav-link'>Laptop</Link>
                  <Link to="/mobiles" className='nav-link'>Mobile</Link>
                  <Link to="/accessories" className='nav-link'>Accessories</Link>
                  <Link to="/tv" className='nav-link'>Televisions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> */}
    <header className='header-top'>
      <div className='header-container'>
        <div className='row align-items-center'>
          <div className='col-12'>
            <p className='text-white mb-0 text-align-center py-1'>
            <marquee direction="right" behavior="alternate">Grab Ur Deals at low cost for this Festive Season..</marquee>
            </p>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header