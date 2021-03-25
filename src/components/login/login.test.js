import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import {Login} from './login';


const mockStore = configureStore({});
const history = createMemoryHistory();

it(`Render 'Login' when user navigate to '/login' url`, () => {

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <Login />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByLabelText(`E-mail`)).toBeInTheDocument();
  expect(screen.getByLabelText(`Password`)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`email`), `keks@gmail.com`);
  userEvent.type(screen.getByTestId(`password`), `123456`);

  expect(screen.getByDisplayValue(`keks@gmail.com`)).toBeInTheDocument();
  expect(screen.getByDisplayValue(`123456`)).toBeInTheDocument();
});

test(`Submits LoginForm`, () => {
  const onSubmit = jest.fn();

  const {getByTestId} = render(
      <Router history={history}>
        <Login onSubmit={onSubmit} />
      </Router>
  );

  fireEvent.submit(getByTestId(`formid`));
  expect(onSubmit).toHaveBeenCalled();
});

