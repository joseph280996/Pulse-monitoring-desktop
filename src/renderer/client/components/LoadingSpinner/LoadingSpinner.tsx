import classNames from 'classnames';
import { ReactElement } from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.scss';

type LoadingSpinnerPropsType = {
  className?: string;
  wrapperClassName?: string;
  message?: string;
};

const LoadingSpinner = ({
  className,
  wrapperClassName,
  message,
}: LoadingSpinnerPropsType): ReactElement => {
  return (
    <div className={classNames('Loading-container', wrapperClassName)}>
      <Spinner
        className={classNames('Loading-animation', className)}
        animation="border"
        role="status"
      />
      {message && <p className="Loading-message">{message}</p>}
    </div>
  );
};

LoadingSpinner.defaultProps = {
  className: '',
  wrapperClassName: '',
  message: null,
};

export default LoadingSpinner;
