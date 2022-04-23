import classNames from 'classnames';
import { PropsWithChildren, ReactElement } from 'react';

type SelectProps = {
  id?: any;
  name?: string;
  className?: string;
  value: any;
  onChange: ChangeEventHandler;
  onBlur?: FocusEventHandler;
};

function Select({
  className,
  name,
  children,
  value,
  onChange,
  onBlur,
  id,
}: PropsWithChildren<SelectProps>): ReactElement {
  return (
    <select
      id={id}
      className={classNames('Select', className)}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    >
      {children}
    </select>
  );
}

Select.defaultProps = {
  id: null,
  name: null,
  className: null,
  onBlur: null,
};

export default Select;
