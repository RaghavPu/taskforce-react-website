import React from 'react'
import Header from '../Components/Header'
import WebNavbar from '../Components/WebNavbar'
import InformationWidget from "../Components/InformationWidget.jsx"
import information from "../info.js"
import {info} from '../info.js'

function Home() {
  return (
    <div>
        <WebNavbar />
        <Header />
        <InformationWidget information={info.mission} align="left" imgSrc="/images/gaming.svg" />
        <InformationWidget information={info.progress} align="right" imgSrc="/images/gaming.svg" />
    </div>
  )
}

export default Home