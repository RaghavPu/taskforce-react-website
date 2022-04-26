import React from 'react'
import "../styles/info.css"

function Information() {
  return (
    <div className='info'>
        <div className='info-content'>
            <h1 className='info-h1'>About Us</h1>
            <p className='info-p'>
                Taskforce Whirlwind is a first person multiplayer shooter game currently in development by the Videogame Programming II classes in Bakerland. The player is a US operative who works to prevent and/or deal with cases regarding human trafficking. Players progress through missions of various difficuty, unlocking new bases around the world, recruiting new team members, acqiring weapons, and discovering extra locations.<br/><br/>Throughout these missions, the player learns to notice the signs of trafficking and what to do to prevent it, all while uncovering the enemy's secrets and a grand scheme much larger than they could have imagined.
            </p>
        </div>
        <img className='info-img' src="/images/gaming.svg" alt="" />
    </div>
  )
}

export default Information