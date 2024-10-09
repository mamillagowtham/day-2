

import React from 'react'

export const Button = (props) => {
    const {backgroundColor,buttonText,click} = props
  return (
    <button style={{backgroundColor }}
    onClick={click}>
        {buttonText}
    </button>
  )
}
