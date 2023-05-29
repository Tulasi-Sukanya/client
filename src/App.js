import React from 'react'
import {Routes,Route} from "react-router-dom"
import ApiFile from './Components/API/ApiFile'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Policy from './Pages/Policy'
import PageNotFound from './Pages/PageNotFound'
import Loading from './Pages/Loading'
import Register from './Pages/Authentication/register'
import Login from './Pages/Authentication/login'
import ForgotPasssword from './Pages/Authentication/ForgotPassword'
import Mobiles from './Components/ProductPages/Mobiles'
import Ipad from './Components/ProductPages/Ipad'
import MacBook from './Components/ProductPages/MacBook'
import Laptops from './Components/ProductPages/Laptops'
import Accessories from './Components/ProductPages/Accessories'
import CartPage from './Pages/CartPage'
import Allproducts from './Components/ProductPages/Allproducts'
import Telivision from './Components/ProductPages/Telivision'
import SingleProductPage from './Components/ProductPages/SingleProductPage'
import ProductNotAvaialble from './Components/ProductPages/ProductNotAvaialble'
import Feedback from './Pages/Feedback'
import Logout from './Pages/Authentication/logout'
import PriceFilter from './Pages/PriceFilter'

const App = () => {
  return (
    <>
    <ApiFile>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About /> } />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/feedbackORcomplaint" element={<Feedback />} />
     
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPasssword />} />
      <Route path="/logout" element={<Logout />} />
 
      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/ipad" element={<Ipad /> } />
      <Route path="/macbook" element={<MacBook /> } />
      <Route path="/laptop" element={<Laptops /> } />
      <Route path="/accessories" element={<Accessories /> } />
      <Route path='/tv' element={<Telivision /> } />
      <Route path="/all" element={<Allproducts />} />
      
      <Route path="/cart" element={<CartPage />} />
      <Route path="/singleproduct" element={<SingleProductPage />} />
      <Route path="/notavailable" element={<ProductNotAvaialble />} />
      <Route path="/pricefilter" element={<PriceFilter />} />

    </Routes>
    </ApiFile>
    </>
  )
}
export default App

// https://funny-clafoutis-0495c6.netlify.app/
// https://classy-cassata-7f3e1e.netlify.app/