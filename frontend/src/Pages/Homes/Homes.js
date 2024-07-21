import React from 'react'
import Layout from '../../Component/Layouts/Layout'
import "../../Styles/HomeStyle.css"
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Promosection from './Promosection'

function Homes() {
  return (
    <div>
    <Layout>
     {/* <Section1 /> */}
     <Section1/>  
     {/* <Section2 /> */}
      <Section2/> 
      {/* <Section3 /> */}
      <Section3/> 
      {/* <Section4 /> */}
      <Section4 />   
      {/* <Section5 /> */}
      <Section5 /> 
      {/* <Section6 /> */}
      <Section6 /> 

      {/* <Section7 /> */}
      <Section7 />
      {/* promosection /> */}
      <Promosection />
    </Layout>
    
    </div>
  )
}

export default Homes