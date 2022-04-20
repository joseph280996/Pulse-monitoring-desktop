import classNames from 'classnames';
import * as React from 'react';

type SelectProps = {
  id?: any;
  name?: string;
  className?: string;
  value: any;
  onChange: React.ChangeEventHandler;
  onBlur?: React.FocusEventHandler;
};

function Select({
  className,
  name,
  children,
  value,
  onChange,
  onBlur,
  id,
}: React.PropsWithChildren<SelectProps>): React.ReactElement {
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
