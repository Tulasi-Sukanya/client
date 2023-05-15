import React,{useContext} from 'react'
import ProductCard from '../Components/ProductPages/ProductCard'
import { store } from '../Components/API/ApiFile'
// import { Link } from 'react-router-dom'

const Hotproductsslider = () => {
    const [context] =useContext(store);
  return (
    <div>
        <div className='hot-products-slider'>
          <div class="container">
            <div class="row" id="slider-text">
              <h3 className='text-center'>NEW COLLECTION</h3>
            </div>
          </div>
        <div class="multi-carousel" data-mdb-interval="3000" data-mdb-items="5">
            <div class="d-flex justify-content-center m-2 mb-3">
                <button class="carousel-control-prev btn btn-pink btn-floating mx-3" type="button" tabindex="0" data-mdb-slide="prev">
                    <i class="fas fa-angle-left fa-lg"></i>
                </button>
                <button class="carousel-control-next btn btn-pink btn-floating mx-3" type="button" tabindex="0" data-mdb-slide="next">
                    <i class="fas fa-angle-right fa-lg"></i>
                </button>
            </div>
            <div class="multi-carousel-inner">
                <div class="multi-carousel-item">
                    <div className='row justify-content-center gap-5 col-ms-10'>
                      {
                      context.filter((Data)=> Data.id >= 1).map((item,index)=>{
                        return(
                        <ProductCard key={index} image={item.image} name={item.name} price={item.price} oprice={item.oprice} item={item} />
                        )
                      })
                    }
                    </div>
                </div>
            </div>
        </div>
        </div>
{/* <div class="col-md-10 col-md-offset-1">
<div class="carousel slide" data-ride="carousel" data-type="multi" data-interval="3000" id="myCarousel">
  <div class="carousel-inner">
    <div class="item">
      <div class="col-md-2 col-sm-6 col-xs-12">
                <div class="multi-carousel-item">
                    <div className='row justify-content-center gap-5 col-ms-10'>
                      {
                      context.filter((Data)=> Data.id >= 1).map((item,index)=>{
                        return(
                        <ProductCard key={index} image={item.image} name={item.name} price={item.price} oprice={item.oprice} item={item} />
                        )
                      })
                    }
                    </div>
                </div>
        </div>
      </div>
    </div>
  </div>
  <Link class="left carousel-control" to="#myCarousel" data-slide="prev">
    <i class="glyphicon glyphicon-chevron-left"></i>
  </Link>
  <Link class="right carousel-control" to="#myCarousel" data-slide="next">
    <i class="glyphicon glyphicon-chevron-right"></i>
  </Link>
</div>
</div> */}

        {/* </div> */}
        {/* <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <div class="carousel carousel-showmanymoveone slide" id="itemslider">
                <div class="carousel-inner">
                  <div class="item active">
                    <div class="col-xs-12 col-sm-6 col-md-2">
                      <div className='row justify-content-center gap-5 col-ms-10'>
                      {
                      context.filter((Data)=> Data.id >= 1).map((item,index)=>{
                        return(
                        <ProductCard key={index} image={item.image} name={item.name} price={item.price} oprice={item.oprice} item={item} />
                        )
                      })
                    }
            </div>
           </div>
          </div>
        </div>

        <div id="slider-control">
          <a class="left carousel-control" href="#itemslider" data-slide="prev">
            <img src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_402-512.png" alt="Left" class="img-responsive" />
          </a>
          <a class="right carousel-control" href="#itemslider" data-slide="next">
            <img src="http://pixsector.com/cache/81183b13/avcc910c4ee5888b858fe.png" alt="Right" class="img-responsive" />
          </a>
      </div>
      </div>
    </div>
  </div>
</div>
</div> */}
    </div>
  )
}

export default Hotproductsslider


