import { Spinner } from 'react-bootstrap'

import React from 'react'

const LoadingBox = () => {
  return (
    <Spinner
      animation="border"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default LoadingBox
