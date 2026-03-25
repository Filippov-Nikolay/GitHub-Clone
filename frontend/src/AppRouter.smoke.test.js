import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cookies from 'js-cookie';
import AppRouter from './main';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));
jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn(),
  remove: jest.fn(),
}));
jest.mock('react-vanilla-tilt', () => ({
  __esModule: true,
  default: ({ children }) => <div data-testid="tilt-mock">{children}</div>,
}));

const axios = require('axios').default;

beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

beforeEach(() => {
  jest.clearAllMocks();
  window.history.pushState({}, '', '/');
});

test('renders landing page for guest users', async () => {
  Cookies.get.mockReturnValue(undefined);
  axios.get.mockRejectedValue(new Error('backend unavailable'));

  render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );

  expect(await screen.findByRole('heading', { name: /let`s build from here/i })).toBeInTheDocument();
});

test('renders dashboard for authenticated users', async () => {
  Cookies.get.mockReturnValue('nf');
  axios.get.mockImplementation((url) => {
    if (url.includes('/api/edit/getProfile')) {
      return Promise.resolve({
        data: {
          name: 'Nikolay',
          avatar: '',
        },
      });
    }

    if (url.includes('/api/User/current')) {
      return Promise.resolve({
        data: {
          username: 'nf',
        },
      });
    }

    return Promise.reject(new Error(`Unexpected request: ${url}`));
  });

  render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
  });
});
