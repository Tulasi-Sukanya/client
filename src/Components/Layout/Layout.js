import React from 'react'
import Header from './Header'
import Footer from './Footer'
//SEO
import {Helmet} from "react-helmet"
import { Toaster } from 'react-hot-toast';
// import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author}) => {
  return (
    <div>
       <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{minHeight:"80vh"}}>
        {/* <ToastContainer /> */}
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: "Ecommerece-E-Shop",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Sukanya tulasi",
};



export default Layout