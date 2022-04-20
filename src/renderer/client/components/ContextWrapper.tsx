import React from 'react';
import contexts from '../common/utils/context';

const ContextWrapper = ({
  children,
}: React.PropsWithChildren<any>): React.ReactElement => {
  return contexts.reduce(
    (component, Provider) => <Provider>{component}</Provider>,
    children
  ) as React.ReactElement;
};
export default ContextWrapper;
