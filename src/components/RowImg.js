import React from 'react'

export default function RowImg(props) {
  return (
    <div className="row-img m-1 p-2">
        <img src={props.src} alt={props.alt} />
    </div>
  )
}
