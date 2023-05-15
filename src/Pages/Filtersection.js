import React,{useContext} from 'react'
import '../Styles/filtersection.css'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import { store } from '../Components/API/ApiFile'
// import { AscendingFilter } from './AscendingFilter'
// import {handleInput} from './PriceFilter'

const Filtersection = () => {
    const [context] =useContext(store);

  return (
    <div className='filter-container'>
    <div className='filter-form'>
        <div className='filterproduct-category'>
            <h5>Filter by Category</h5>
            <Link to="/all" style={{textDecoration:"none"}}><span className='item'>All Products</span><br/></Link>
            <Link to="/ipad" style={{textDecoration:"none"}}><span className='item's>Ipads</span><br/></Link>
            <Link to="/mobiles" style={{textDecoration:"none"}}><span className='item's>Mobiles</span><br/></Link>
            <Link to="/macbook" style={{textDecoration:"none"}}><span className='item's>MacBooks</span><br/></Link>
            <Link to="/laptop" style={{textDecoration:"none"}}><span className='item's>Laptops</span><br/></Link>
            <Link to="/accessories" style={{textDecoration:"none"}}><span className='item's>Accessories</span><br/></Link>
            <Link to="/tv" style={{textDecoration:"none"}}><span className='item's>Telivisions</span></Link>
        </div><br/>
        <div className='filter-by-rating'>
            <h5>Filter By Star Rating</h5>
            <Link to="/notavailable"><span className='star-item'><ReactStars count={5} size={28} value="5" edit={false} activeColor="goldenrod" style={{outline:"black"}} /></span></Link>
            <Link to="/all"><span className='star-item'><ReactStars count={5} size={28} value="4" edit={false} activeColor="goldenrod" /></span></Link>
            <Link to="/notavailable"><span className='star-item'><ReactStars count={5} size={28} value="3" edit={false} activeColor="goldenrod" /></span></Link>
            <Link to="/notavailable"><span className='star-item'><ReactStars count={5} size={28} value="2" edit={false} activeColor="goldenrod" /></span></Link>
            <Link to="/notavailable"><span className='star-item'><ReactStars count={5} size={28} value="1" edit={false} activeColor="goldenrod" /></span></Link>
            {/* #ffd700 */}
        </div><br/>
        <div className='filter-by-ascdes'>
            {/* <h5>Filter by Asc/Des</h5>
            <div className='form-check'>
                <label className='form-check-label'>
                <Link to="/asc"><input type="radio" className='form-check-input' name="option" />Ascending</Link>
                </label>
            </div>
            <div className='form-check'>
                <label className='form-check-label'>
                <input type="radio" className='form-check-input' name="option" />Descending
                </label>
            </div> */}
            {/* <AscendingFilter /> */}
        </div><br/>
        <div className='filter-by-price-range'>
        <h5>Filter by Price</h5><br/>
            <input type="range" className='price-range' name="price" min="300" max="300000" />
            {/* <Link to="/pricefilter"><button>Price Range</button></Link> */}
        </div><br/>
        {/* onInput={ handleInput } */}
        <button type="reset" className='btn btn-outline-danger btn-m'>Clear Filters</button>
    </div>
    </div>
  )
}

export default Filtersection