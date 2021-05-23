import * as React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './Finish.scss'

type FinishPropType = {
  onEndClick: React.MouseEventHandler
}

const Finish = ({ onEndClick }: FinishPropType): React.ReactElement => {
  return (
    <div className={styles['Finish-wrapper']}>
      <div className={styles.Finish}>
        <h1>Finish</h1>
        <div className={styles['Finish-buttons']}>
          <Button
            className={styles['Finish-button']}
            type="button"
            onClick={onEndClick}
          >
            End
          </Button>
          <Link to="/">
            <Button type="button" className={styles['Finish-button']}>
              Start a new session
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Finish
