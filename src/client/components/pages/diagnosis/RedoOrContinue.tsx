import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function RedoOrContinue() {
  return (
    <div className="Overlay-container">
      <Button type="button" onClick={() => console.log('')}>
        Reset
      </Button>
      <Link className="Overlay-link" to="/postdiagnosis">
        <Button type="button">Continue</Button>
      </Link>
    </div>
  )
}

export default RedoOrContinue
