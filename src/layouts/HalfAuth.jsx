import React from 'react'
import "../assets/styles/layouts/HalfAuth.css"

export default function HalfAuth(props) {
  const { fComponent } = props

  return (
    <div className='half-auth'>
      <div className='half-auth__content'>
        <div className='logo-container'>
          <span className='logo'>DBankr</span>
        </div>
        {fComponent()}
      </div>
      <div className='half-auth__image-container'>
        <img src={require("../assets/images/hand_with_clock.png")} alt="A hand holding a clock" className="image" />
      </div>
    </div>
  )
}
