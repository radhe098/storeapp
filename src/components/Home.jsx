import React from 'react'
import Header from './Header'
import Homecomponents from './Homecomponents'
import Hometext from './Hometext'
import Footer from './Footer'
import Carasoul from './carasoul';
const Home = () => {
  return (
  <>
  <Header></Header>
  <Homecomponents/>
  <Carasoul/>
  <Hometext/>
  <Footer></Footer>
  </>  
  )
}

export default Home
