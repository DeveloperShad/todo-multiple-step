
import React from 'react'

export const Button = ({ btnText, btnIcon, handleButton }) => {
  return (
    <div className="button">
      <button onClick={handleButton}> {btnIcon && <i className="fas fa-plus"></i>} &nbsp; {btnText}</button>
    </div>
  )
}
