import React from 'react'
import WebNavbar from '../Components/WebNavbar'

import InformationWidget from '../Components/InformationWidget'
import {info} from "../info.js"

function Progress() {
  return (
    <div>
        <WebNavbar />
        <InformationWidget information={info.progress} align="left" imgSrc="/images/gaming.svg" />
    </div>
  )
}

export default Progress