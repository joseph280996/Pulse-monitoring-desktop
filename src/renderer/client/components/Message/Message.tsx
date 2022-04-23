import { ReactElement } from 'react';
import { Alert } from 'react-bootstrap';

export type MessageProps = {
  className?: string;
  message?: string;
  error?: string;
  variant?: string;
};

function Message({
  className,
  message,
  error,
  variant = 'primary',
}: MessageProps): ReactElement {
  return (
    <Alert className={className} variant={error ? 'danger' : variant}>
      {message || error}
    </Alert>
  );
}

Message.defaultProps = {
  className: null,
  message: null,
  error: null,
  variant: null,
};

export default Message;
