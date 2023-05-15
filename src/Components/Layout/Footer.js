import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='py-3'>
      <div className='footer-container-middle'>
        <div className='row'>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Contact us</h4>
            <address className="text-white py-1 mb-1">
            H.NO:355 Near XXX <br/> XXX,XXXX<br/>Pincode:524305<br/>
            </address>
            <Link to="/" className='mt-1 d-block mb-1 text-white'  style={{textDecoration:"none"}}>Tel:+91 1234567890</Link>
            <Link to="/" className='mt-1 d-block mb-1 text-white'> E-Shop@gmail.com</Link>
              <div className='social-icons text-white d-flex gap-10'>
              <div className="footer-social-icons">
                <h4 className="_14">Follow us on</h4>
                <ul className="social-icons">
                  <li><Link className="social-icon"> <i className="fa fa-facebook"></i></Link></li>
                  <li><Link className="social-icon"> <i className="fa fa-twitter"></i></Link></li>
                  <li><Link className="social-icon"> <i className="fa fa-youtube"></i></Link></li>
                  <li><Link className="social-icon"> <i className="fa fa-linkedin"></i></Link></li>
                  <li><Link className="social-icon"> <i className="fa fa-github"></i></Link></li>
                </ul>
              </div>
              </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className="text-white py-1 mb-1" to="/policy" style={{textDecoration:"none"}}>Privacy Policy</Link>
              <Link className="text-white py-1 mb-1" to="/policy" style={{textDecoration:"none"}}>Refund Policy</Link>
              <Link className="text-white py-1 mb-1" to="/policy" style={{textDecoration:"none"}}>Shipping Policy</Link>
              <Link className="text-white py-1 mb-1" to="/policy" style={{textDecoration:"none"}}>Terms & Conditions</Link>
              <Link className="text-white py-1 mb-1" style={{textDecoration:"none"}}>Blogs</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className="text-white py-1 mb-1" to="/about" style={{textDecoration:"none"}}>About</Link>
              <Link className="text-white py-1 mb-1" to="/feedbackORcomplaint" style={{textDecoration:"none"}}>Faq</Link>
              <Link className="text-white py-1 mb-1" to="/contact" style={{textDecoration:"none"}}>Contact</Link>
              <Link className="text-white py-1 mb-1" to="/feedbackORcomplaint" style={{textDecoration:"none"}}>Feedback</Link>
              <Link className="text-white py-1 mb-1" to="/feedbackORcomplaint" style={{textDecoration:"none"}}>complaint</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className="text-white py-1 mb-1" style={{textDecoration:"none"}} to="/accessories" >Accessories</Link>
              <Link className="text-white py-1 mb-1" style={{textDecoration:"none"}} to="/ipad">Ipad</Link>
              <Link className="text-white py-1 mb-1" style={{textDecoration:"none"}} to="/laptop">Laptop</Link>
              <Link className="text-white py-1 mb-1" style={{textDecoration:"none"}} to="/macbook">MacBook</Link>
              <Link className="text-white py-1 mb-1" style={{textDecoration:"none"}} to="/mobile">Mobile</Link>
              <Link className="text-white py-1 mb-1" style={{textDecoration:"none"}} to="/tv">Television</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className='text-white'/> */}
    </footer>
    <footer className='py-3'>
      <div className='footer-container-bottom'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>
              &copy; {new Date().getFullYear()} Powered by Sukanya Tulasi
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer