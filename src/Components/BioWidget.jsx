import React from 'react'

import "../styles/bioWidget.css"

function BioWidget(props) {



  return (
    <div className='bioDiv'>
        {console.log(props.person.name + "person")}
        <h1>{props.person.name}</h1>
        <p>{props.person.bio}</p>
    </div>
  )
}

export default BioWidget