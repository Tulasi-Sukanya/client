import React,{useContext} from 'react'
import Hotproduct from './Hotproduct'
import { store } from '../Components/API/ApiFile'
import { Link } from 'react-router-dom'
import '../Styles/Latestproducts.css'

const Latestproducts = () => {
    const [context] =useContext(store);
  return (
    <div className='latest-products'>
        <div className="container">
            <div className="row">
                <h3 className='text-center'>NEW COLLECTION</h3>
            </div>
        </div><br />
        <div className='row justify-content-center gap-5 col-12'>
            {
                context.filter((Data)=> (Data.id >= 1) && (Data.id <= 8) ).map((item,index)=>{
                    return(
                    <Hotproduct key={index} image={item.image} name={item.name} price={item.price} oprice={item.oprice} item={item} />
                    )
                })
            }
            <button className='btn btn-primary text-align-center'>Load More</button>
        </div>
    </div>
  )
}

export default Latestproducts

