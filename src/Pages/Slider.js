import React,{useEffect, useState} from 'react'
import '../App.css'
import img1 from '../Components/images/img1.jpg'
import img2 from '../Components/images/img2.jpg'
import img3 from '../Components/images/img3.jpg'
import img4 from '../Components/images/img4.jpg'
import img5 from '../Components/images/img5.jpeg'
import img6 from '../Components/images/img6.jpeg'
import img7 from '../Components/images/img7.jpeg'
import img8 from '../Components/images/img8.jpeg'
import img9 from '../Components/images/img9.jpeg'

function Slider() {
        const [img,setimg]=useState(0);
        const [allimg]=useState([img2,img3,img4,img5,img6,img7,img8,img9,img1])

        useEffect(()=>{
            setInterval(()=>{
            setimg(img => img < 8 ? img + 1 : 0)
            },5000)
        },[])
  return (
    <>
        <section className='slider-wrapper-1 py-5'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-10'>
                <div className='main-banner p-3'>
                  <img src={allimg[img]} alt="Not found" className='image-slider' />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Slider;