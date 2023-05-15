import React from 'react'
import Layout from "../Components/Layout/Layout"
import '../Styles/style.css'

const Feedback = () => {
  return (
  <Layout title="Register E-Shop">
      <div className="form-container "><br/>
        <form style={{border:"1px solid grey"}}>
          <h4 className="title">GET IN TOUCH</h4>
          <div className="mb-3">
            <input type="text"  className="form-control" name="name" id="InputName" placeholder="Enter Your Name" required autoFocus
            />
          </div>
          <div className="mb-3">
            <input type="email"  className="form-control" name="email" id="InputEmail" placeholder="Enter Your Email " required />
          </div>
          <div className="mb-3">
            <input type="text"  className="form-control" name="phone"
            id="InputPhone" placeholder="Enter Your Phone" required />
          </div>
          <div className="mb-3">
            <input type="text"  className="form-control" name="address" id="InputAddress" placeholder="Enter Your Address" required />
          </div>
          <div className="mb-3">
           <textarea type="message" rows="4" cols="40" placeholder='Give ur feedback/complaint'></textarea>
          </div>
          <button style={{width:"18rem",height:"2rem"}}>Send Message</button>
          {/* <div>
                <span class="fa fa-phone"></span>001 1023 567
                <span class="fa fa-envelope-o"></span> contact@company.com
           </div> */}
    </form>
      </div>
    </Layout>
  )
}

export default Feedback