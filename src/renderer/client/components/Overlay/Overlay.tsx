/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactElement, FC } from 'react';
import './Overlay.scss';
import { OverlayPropType } from './OverlayTypes';

const Overlay: FC<OverlayPropType> = ({ children, onClick }): ReactElement => {
  return (
    <div onClick={onClick} className="Overlay-container">
      {children}
    </div>
  );
};

export default Overlay;
