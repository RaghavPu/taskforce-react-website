import React from 'react'
import { Button } from 'react-bootstrap'

import '../styles/infoWidget.css'


const InformationWidget = ({information, align, imgSrc, buttonText, btnLink}) => {
    return (
        align === "left" ? 
            <div id="about" className="completeInfoDiv">
                <div style={{textAlign: align}} className="informationWidgetDiv leftWidget">
                    <h1>{information.title}</h1>
                    <p>{information.description}</p>
                </div>
                <img className="infoPicture" src={imgSrc} alt="" />
            </div> 
            : 
            <div id="about" className="completeInfoDiv">
                <img className={"infoPicture"} src={imgSrc} alt="" />
                <div style={{textAlign: align}} className="informationWidgetDiv rightWidget">
                    <h1>{information.title}</h1>
                    <p>{information.description}</p>
                </div>
            </div>
        
    )
}

export default InformationWidget
