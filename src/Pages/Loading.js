import React from 'react'
import '../Styles/Loading.css'
import Layout from '../Components/Layout/Layout'

const Loading = () => {
  return (
    <Layout title={"E-shop Loading"}>
    <>
      {/* <span className='page-loading'></span> */}
      <div class="hm-spinner"></div>
    </>
    </Layout>
  )
}

export default Loading