import React from 'react'

const Button = (props) => {
  return (
    <>
        <a className={`btn ${props.class}`} to={props.url}>{props.text}</a>
    </>
  )
}

export default Button