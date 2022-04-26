import React from 'react'
import { useState, useEffect } from 'react'

import WebNavbar from '../Components/WebNavbar'
import BioWidget from '../Components/BioWidget'
import {info, peopleData} from "../info.js"

import "../styles/developers.css"

function Developers() {

  const [infoData, setInfoData] = useState();
  const [dataReady, setDataReady] = useState(false);

	useEffect(() => {
		const response = fetch("/info.json")
			.then((response) => response.json())
			.then((data) => {
        // console.log(data)
				setInfoData(data);
        setDataReady(true); // new
			})
	}, [])

  return (
    <div>
        <WebNavbar />
        {console.log(peopleData)}

        <div className='biosContainer'>
          {dataReady ?
            infoData.peopleArr.map((personData, i) => {
              return <BioWidget key={i} person={personData}/>
            }) : 
            console.log("loading")
            /* <div className="container">Loading...</div> */
          }
        </div>
        {
          dataReady ? console.log(infoData.peopleArr[0]) : console.log("Not Done")
        }
    </div>
  )
}

export default Developers