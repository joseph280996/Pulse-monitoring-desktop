import * as React from 'react';
import { Link } from 'react-router-dom';
import StyledButton from '../../Button';
import styles from './Finish.scss';

type FinishPropType = {
  onEndClick: React.MouseEventHandler;
};

const Finish = ({ onEndClick }: FinishPropType): React.ReactElement => {
  return (
    <div className={styles['Finish-wrapper']}>
      <div className={styles.Finish}>
        <h1>Finish</h1>
        <div className={styles['Finish-buttons']}>
          <StyledButton
            className={styles['Finish-button']}
            type="button"
            onClick={onEndClick}
          >
            End
          </StyledButton>
          <Link to="/">
            <StyledButton type="button" className={styles['Finish-button']}>
              Start a new session
            </StyledButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Finish;
