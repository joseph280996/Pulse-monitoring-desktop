import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { ReactElement, MouseEventHandler } from 'react';
import StyledButton from '../StyledButton';
import './ResetButton.scss';

type ResetButtonProps = {
  onReset: MouseEventHandler;
};

const ResetButton = ({ onReset }: ResetButtonProps): ReactElement => {
  return (
    <StyledButton
      wrapperClassName="ResetButton-wrapper"
      className="ResetButton"
      onClick={onReset}
      icon={faRedoAlt}
    />
  );
};

export default ResetButton;
