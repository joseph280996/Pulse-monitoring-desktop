import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  it('should render', () => {
    expect(render(<App />)).toBeTruthy();
  });
});
