import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios'
import { store } from '../Components/API/ApiFile'
import Hotproduct from './Hotproduct'
import Loading from './Loading'
import '../Styles/ProductCard.css'

const ProductLoadMore = () => {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(false);
        const [context] =useContext(store);
        const [noOfElement,setnoOfElement]=useState(8);
        const loadMore=()=>{
          setnoOfElement(noOfElement + 8);
        }
        const slice = context.slice(0,noOfElement);

        console.log(data);
        useEffect(()=>{
            setLoading(false);
            const fetchData=async()=>{
              await axios
              .get("http://localhost:8000/get-product")
              .then((resolve) => {
                console.log(resolve.data);
                setData(resolve.data);
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
            }
            fetchData()
          },[])
  return (
    <div>
        <section>
          <h3 className='text-center'>NEW COLLECTION</h3><br/>
          <div className='new-collection align-items-center justify-content-center'>
            <div className='row justify-content-center gap-5 col-12'>
            {    loading ? <Loading /> : 
            slice.map((item,index)=>{
                    return(
                    <Hotproduct key={index} image={item.image} name={item.name} price={item.price} oprice={item.oprice} item={item} />
                    )
                })
            }
        </div>
        <button className='btn btn-dark d-block' style={{display:"grid",margin:"auto"}} onClick={()=>loadMore()}>Load More</button><br/>
          </div>
        </section>
    </div>
  )
}

export default ProductLoadMore