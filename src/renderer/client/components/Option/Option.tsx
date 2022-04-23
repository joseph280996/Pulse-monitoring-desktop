import { ReactElement, OptionHTMLAttributes } from 'react';
import './Option.scss';

type OptionPropsType = {
  className?: string;
};

const Option = ({
  className,
  value,
  children,
}: OptionHTMLAttributes<OptionPropsType>): ReactElement => {
  return (
    <option className={`Option ${className}`} value={value}>
      {children}
    </option>
  );
};

export default Option;
