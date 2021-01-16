import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="NotFound">
      <div className="NotFound-container">
        <h2 className="NotFound-title">404! NOT FOUND</h2>
        <div>
          <p>
            The page that you are trying to connect is either in development or
            cannot be found
          </p>
          <div className="NotFound-buttonContainer">
            <Link to="/">
              <Button type="button">Go back to our homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
