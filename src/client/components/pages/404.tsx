import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      <h2>NOT FOUND</h2>
      <div>
        <p>
          The page that you are trying to connect is either in development or
          cannot be found
        </p>
        <div>
          <Link to="/">
            <button type="button">Go back to our homepage</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
