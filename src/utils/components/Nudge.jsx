import React from 'react'


export default function Nudge(props, {children}) {

    const {from, to, style} = props;
      
        return (
          <div
            style={{
              ...style,
              ...springs,
            }}
          >{children}</div>
        )
      }

