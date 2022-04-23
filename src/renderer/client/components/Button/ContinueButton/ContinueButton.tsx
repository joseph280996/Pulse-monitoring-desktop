import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ReactElement } from 'react';
import StyledButton, { IButtonProps } from '../StyledButton';
import './ContinueButton.scss';

const ContinueButton = ({ type = 'button' }: IButtonProps): ReactElement => {
  return (
    <StyledButton
      wrapperClassName="ContinueButton-wrapper"
      className="ContinueButton"
      icon={faArrowRight}
      type={type}
    />
  );
};

export default ContinueButton;
