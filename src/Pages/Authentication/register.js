import React, { useState,useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//importing react-toastify for notifications..
// import {toast} from "react-toastify";
import toast from 'react-hot-toast';
import '../../Styles/style.css'


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();
  // useEffect(()=>{
  //   axios.post("http://localhost:8000/register")
  //   .then((res)=>{
  //     res?navigate("/register"):navigate("/login");
  //   })
  //   .catch((err)=>console.log(err))
  // },[]);
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // /api/v1/auth/register
    try {
      // const res = await axios.post("http://localhost:8000/register").then((res)=>console.log(res)).catch((err)=>console.log(err))
      // if (res && res.data.success) {
        toast.success("Registered Successfully!!");
        navigate("/login")
      }
      // else {
        // toast.error(res.data.message);
      // }
    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
// console.log(process.env.BACKEND_API);
// onSubmit={handleSubmit}
  return (
    <Layout title="Register E-Shop">
      <div className="form-container ">
        <form action="http://localhost:8000/register" method="post" onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input type="text"  className="form-control" name="name" id="InputName" placeholder="Enter Your Name" required autoFocus
            />
          </div>
          <div className="mb-3">
            <input type="email"  className="form-control" name="email" id="InputEmail" placeholder="Enter Your Email " required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="InputPassword" name="password" placeholder="Enter Your Password" required />
          </div>
          <div className="mb-3">
            <input type="text"  className="form-control" name="phone"
            id="InputPhone" placeholder="Enter Your Phone" required />
          </div>
          <div className="mb-3">
            <input type="text"  className="form-control" name="address" id="InputAddress" placeholder="Enter Your Address" required />
          </div>
          <div className="mb-3">
            <input type="text"  className="form-control" name="question" id="InputQuestion" placeholder="Which is your Favorite food?" required />
          </div>
          <button type="submit" className="btn btn-primary">REGISTER</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;