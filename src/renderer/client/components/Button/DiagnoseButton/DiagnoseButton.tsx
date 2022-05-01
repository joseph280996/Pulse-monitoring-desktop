import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import StyledButton, { IButtonWithIconProps } from '../StyledButton';
import './DiagnoseButton.scss';

type IDiagnoseButtonProps = IButtonWithIconProps;

function DiagnoseButton({ className }: IDiagnoseButtonProps): ReactElement {
  return (
    <Link to="/diagnosis" className="DiagnoseButton-link">
      <StyledButton
        icon={faStethoscope}
        wrapperClassName="DiagnoseButton"
        className={classNames('DiagnoseButton', className)}
      >
        Diagnose
      </StyledButton>
    </Link>
  );
}

export default DiagnoseButton;
