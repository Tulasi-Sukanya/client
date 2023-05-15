import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import '../../Styles/style.css'

// import { useAuth } from "../../context/logout";

const Login = () => {
  // const [auth,setAuth]=useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("http://localhost:8000/login", {
      //   email,
      //   password,
      // });
      // if (res && res.data.success) {
        // toast.success(res.data && res.data.message);
        toast.success("Login Successfull!!");
        // setAuth({...auth,User:res.data.user,token:res.data.token,});
        // localStorage.setItem("auth",JSON.stringify(res.data));
        navigate("/");
      } 
      // else {
        // toast.error(res.data.message);
      // }
    // } 
    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Login E-Shop">
      <div className="form-container ">
      {/* onSubmit={handleSubmit} */}
        <form  action="http://localhost:8000/login" method="post" onSubmit={handleSubmit} >
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input type="email" name="email" className="form-control" id="InputEmail" placeholder="Enter Your Email " required />
          </div>
          <div className="mb-3">
            <input type="password" name="password" className="form-control" id="InputPassword" placeholder="Enter Your Password" required />
          </div>
         <div className="mb-3">
          <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>FORGOT PASSWORD</button>
         </div>

          <button type="submit" className="btn btn-primary">LOGIN</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;