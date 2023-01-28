import React from 'react'
import HomeCard from '../../Components/HomeComponent/HomeCard/HomeCard'
import HomeHeade from '../../Components/HomeComponent/HomeHeade/HomeHeade'
import Footer from '../../Leyauts/Footer/Footer'
import Navbar from '../../Leyauts/Navbar/Navbar'
import {Helmet} from "react-helmet";

function Home() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Navbar />
      <HomeHeade />
      <HomeCard />
      <Footer />
    </>

  )
}

export default Home