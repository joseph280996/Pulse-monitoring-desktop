import * as React from 'react'
import { Link } from 'react-router-dom'
import StyledButton from '../../Button'
import styles from './NotFound.scss'

function NotFoundPage(): React.ReactNode {
  return (
    <div className={styles.NotFound}>
      <div className={styles['NotFound-container']}>
        <h2 className={styles['NotFound-title']}>404! NOT FOUND</h2>
        <div>
          <p>
            The page that you are trying to connect is either in development or
            cannot be found
          </p>
          <div className={styles['NotFound-buttonContainer']}>
            <Link to="/">
              <StyledButton type="button">Go back to our homepage</StyledButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
