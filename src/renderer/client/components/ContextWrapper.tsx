import { FC, ReactElement } from 'react';
import contexts from '../utils/context';

const ContextWrapper: FC = ({ children }): ReactElement => {
  return contexts.reduce(
    (component, Provider) => <Provider>{component}</Provider>,
    children
  ) as ReactElement;
};
export default ContextWrapper;
