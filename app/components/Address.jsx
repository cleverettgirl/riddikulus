import React from 'react'

export default (props) => {
  return (
    <div className="container">
      <div className="row">
        <h2>Address</h2>
        <h5>{props.address}</h5>
      </div>
    </div>
  )
}
