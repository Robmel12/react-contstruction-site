import React from 'react'

export default function Fade(props) {
    
    return (
      <div
        style={
          {
          width: '100%',
          height: '100%'}
        }
      >{props.children}</div>
    )
}
