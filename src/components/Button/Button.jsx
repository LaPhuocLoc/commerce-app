import React from 'react'
import './button.scss'
const Button = props => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? props.onClick : null}
      type={props.type}
    >
      <span className="btn-text">{props.children}</span>
      <span className="btn-icon">
        {props.type === "plus" ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}
      </span>
    </button>
  )
}

export default Button