import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Layout from '../Components/Layout/Layout'
import '../Components/images/contactus.jpeg'

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="https://th.bing.com/th/id/R.302a1375d35fc0f8f93c91fddc3d7a6d?rik=B1OAXxk234ya9g&riu=http%3a%2f%2fisseusa.org%2fwp-content%2fuploads%2f2017%2f11%2fcontact-us.jpg&ehk=kNq2iPbTlkPF6xkNz4%2f18yrlYtdIr2g55iLpNVxwXBU%3d&risl=&pid=ImgRaw&r=0" alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any query and info about product feel free to call anytime we 24X7
            avaialible!!!
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@E-shop.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-345678999
          </p>
          <p className="mt-3">
            <BiSupport /> :  1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;