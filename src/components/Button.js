import React from 'react'
import propTypes from 'prop-types'

const Button = ({color,text,onClick }) => {
   
  return <button onClick={onClick} style={{background:color}} className='btn'>{text}</button>
}
Button.defaultProps={
    color:'steelblue',
    text:'Add'
}
Button.propTypes={
    text:propTypes.string,
    color:propTypes.string,
    onClick:propTypes.func,
}
export default Button
