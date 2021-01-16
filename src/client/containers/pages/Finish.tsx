import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Finish = () => {
  return (
    <div>
      <h1>Finish</h1>
      <div>
        <Button type="button" onClick={() => console.log('end')}>
          End
        </Button>
        <Link to="/">
          <Button type="button">Start a new session</Button>
        </Link>
      </div>
    </div>
  )
}

export default Finish
