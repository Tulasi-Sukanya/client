import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../Styles/style.css"

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [question, setQuestion] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("http://localhost:8000/forgot-password", {
        // email,
        // newPassword,
        // question,
      // });
      // if (res && res.data.success) {
        toast.success("Password Reset Successfull!!");

        navigate("/login");
      }
      //  else {
        // toast.error(res.data.message);
      // }
    // } 
    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password  E-Shop"}>
      <div className="form-container ">
      {/* onSubmit={handleSubmit} */}
        <form  action="http://localhost:8000/forgot-password" method="post">
          <h4 className="title">RESET PASSWORD</h4>
          <div className="mb-3">
            <input type="email" name="email" className="form-control" id="InputEmail" placeholder="Enter Your Email " required />
          </div>
          <div className="mb-3">
            <input type="text" name="question" className="form-control" id="InputQuestion" placeholder="Enter Your favorite Food " required />
          </div>
          <div className="mb-3">
            <input type="password" name="newPassword" className="form-control" id="InputPassword" placeholder="Enter Your Password" required />
          </div>
          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPasssword;