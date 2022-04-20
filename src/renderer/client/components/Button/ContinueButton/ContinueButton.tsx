import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import StyledButton, { IButtonProps } from '../StyledButton';
import styles from './ContinueButton.scss';

const ContinueButton = ({
  type = 'button',
}: IButtonProps): React.ReactElement => {
  return (
    <StyledButton
      wrapperClassName={styles['ContinueButton-wrapper']}
      className={styles.ContinueButton}
      icon={faArrowRight}
      type={type}
    />
  );
};

export default ContinueButton;
