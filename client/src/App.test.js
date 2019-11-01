import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

test('App renders without crashing!', () => {
  render(<App />);
});

test('App has a header title', () => {
  const { getByText } = render(<App />);
  getByText(/players/i);
})

