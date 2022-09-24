
import React from 'react'

export const Input = ({ placeholder, searchIcon, handleChange, value }) => {
  return (
    <div className="input">
      <input type="text" placeholder={placeholder} value={value?.title} onChange={handleChange} />
      {searchIcon && <span> <i className="fas fa-search"></i></span>}
    </div>
  )
}
