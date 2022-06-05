import classNames from 'classnames';
import { ReactElement, ChangeEventHandler } from 'react';
import usePulsePosition from '../../../utils/hooks/usePulsePositions';
import Option from '../../Option';
import Select from '../Select';
import './PulsePositionSelect.scss';

type PulsePositionProps = {
  className?: string;
  name?: string;
  value: any;
  onPositionChange: ChangeEventHandler;
  onBlur?: ChangeEventHandler;
  required?: boolean;
  label?: string;
};

const PulsePositionSelect = ({
  className,
  onPositionChange,
  label,
  ...selectProps
}: PulsePositionProps): ReactElement => {
  const { pulsePositions } = usePulsePosition();
  return (
    <div className={classNames('PulsePositionSelect', className)}>
      {label && (
        <label
          className="PulsePositionSelect-label"
          htmlFor="pulsePositionSelect"
        >
          {label}
        </label>
      )}
      <Select
        id="pulsePositionSelect"
        {...selectProps}
        onChange={onPositionChange}
      >
        {pulsePositions.map((position) => (
          <Option key={position.id} value={position.id}>
            {position.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};

PulsePositionSelect.defaultProps = {
  className: null,
  name: null,
  required: false,
  onBlur: null,
  label: null,
};

export default PulsePositionSelect;
