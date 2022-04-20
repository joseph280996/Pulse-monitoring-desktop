import classNames from 'classnames';
import * as React from 'react';
import usePulseTypes from '../../../common/utils/hooks/usePulseTypes';
import LoadingSpinner from '../../LoadingSpinner';
import Option from '../../Option';
import Select from '../Select';
import styles from './PulseTypeSelect.scss';

type PulseTypeSelectProps = {
  onBlur: React.FocusEventHandler;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  className?: string;
  value: number | string;
  name?: string;
};

function PulseTypeSelect({
  className,
  onChange,
  value,
  name,
  onBlur,
}: PulseTypeSelectProps): React.ReactElement {
  const { pulseTypes, error } = usePulseTypes();
  if (error) {
    return <LoadingSpinner />;
  }
  return (
    <div className={classNames(styles.PulseTypeSelect, className)}>
      <Select name={name} value={value} onBlur={onBlur} onChange={onChange}>
        {(pulseTypes || []).map((pulseType) => {
          return (
            <Option value={pulseType.id} key={pulseType.id}>
              {pulseType.name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
}

PulseTypeSelect.defaultProps = {
  className: '',
  name: null,
};

export default PulseTypeSelect;
