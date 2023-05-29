import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import '../../Styles/style.css'
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        toast.success("Login Successfull!!");
        setIsLoggedin(true);
        navigate("/");
      } 
    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const logout=()=>{
    setIsLoggedin(false);
  }
  return (
    <Layout title="Login E-Shop">
      <div className="form-container ">
      {/* {!isLoggedin ? (  */}
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
         {/* ): ( */}
         <br/><br/>
        <button className="logout-button">
        <NavLink to="/logout" className="nav-link" onClickCapture={()=>{logout()}}>Logout</NavLink>
      </button>
         {/* ) */}
         {/* } */}
      </div>
    </Layout>
  );
};

export default Login;