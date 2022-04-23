import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import StyledButton from '../StyledButton';
import './ExportDataButton.scss';
import { ExportDataButtonPropsType } from './ExportDataButtonTypes';

const ExportDataButton = ({
  className,
}: ExportDataButtonPropsType): ReactElement => {
  return (
    <Link to="/export-data">
      <StyledButton
        type="button"
        wrapperClassName="ExportDataButton"
        className={classNames('ExportDataButton', className)}
        icon={faFileExport}
      >
        Export Data
      </StyledButton>
    </Link>
  );
};

export default ExportDataButton;
