import React from 'react'
import "./WorkersLayout.scss";

export function WorkersLayout(props) {
    const{children}=props;
  return (
    <div>
        <p>WorkersLayout </p>
        {children}
    </div>
  )
}