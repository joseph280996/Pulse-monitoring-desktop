/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import styles from './Overlay.scss';
import { OverlayPropType } from './OverlayTypes';

function Overlay({
  children,
  onClick,
}: React.PropsWithChildren<OverlayPropType>): React.ReactElement {
  return (
    <div onClick={onClick} className={styles['Overlay-container']}>
      {children}
    </div>
  );
}

export default Overlay;
