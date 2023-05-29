import React, { Component } from 'react'
import Layout from '../../Components/Layout/Layout';
import toast from 'react-hot-toast';

export default class logout extends Component {

 logout = () => {
    localStorage.clear();
    toast.success("Logout Successfull !!");
    window.location.href = "/login"
  }
 no=()=>{
    window.location.href="/"
 }
  render() {
    return (
        <Layout title={"E-shop logout"}>
            <div className='container'>
            <div className='offset-md-4 justify-content-center'>
                <h3 >Do You Want to Logout ?</h3><br/>
                <div className='justify-content-center'>
                    <button onClick={this.logout} className='btn btn-primary' >Yes</button>&nbsp;
                    <button onClick={this.no} className='btn btn-secondary'>No</button>
                </div>
        </div>
            </div>
      </Layout>
    )
  }
}
