import React from "react";
import Layout from '../Components/Layout/Layout'
// import about from '../Components/images/about.jpeg'

const About = () => {
  return (
    <Layout title={"About us - Ecommerce"}>
      <div className="row contactus ">
        <div className="col-md-4">
          <img
            src="https://th.bing.com/th/id/OIP.jf_ncW7bfgzbyXuqs8ZKeQHaFI?pid=ImgDet&rs=1"
            alt="About"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-7">
        <h4>E-Shop</h4>
          <p className="text-justify mt-2">
          We are energetic about discovering things that transcend the commonplace; that we think will get your attention and capture it. In addition, to convey these to you wherever you are and at whatever point you believe you have sufficient energy to enjoy a bit.<br/><br/>

          So we made an organization to bring you items you will become hopelessly enamored with; to allow you to make your very own space, to take advantage of those concealed abilities and make your own looks and accumulations; to enable you to impart your manifestations to companions to understand that second conclusion, to move or be enlivened; and to enable you to shop such that you will discover hypnotizing.<br/><br/>

          We like to consider <b>E-Shop</b> as the advanced age likeness the sixteenth Century, an expressway that changed the essence of exchange in India.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;