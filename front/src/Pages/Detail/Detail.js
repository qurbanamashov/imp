import React from 'react'
import DeteilComp from '../../Components/DetailComponent/DeteilComp'
import Footer from '../../Leyauts/Footer/Footer'
import Navbar from '../../Leyauts/Navbar/Navbar'
import {Helmet} from "react-helmet";
function Detail() {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>detail</title>

            </Helmet>
       <Navbar/>
       <DeteilComp/>
       <Footer/>
    </>
 
  )
}

export default Detail