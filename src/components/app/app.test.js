import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import {AuthorizationStatus} from '../../common/const';


const mockStore = configureStore({});
describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Login' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(`E-mail`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();
  });

  it(`Render 'MainEmpty' when user navigate to '/mainEmpty' url`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH, email: ``}
    });

    const history = createMemoryHistory();
    history.push(`/mainEmpty`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`No places to stay available`)).toBeInTheDocument();
  });

  // it(`Render 'PageNotFound' when user navigate to non-existent route`, () => {
  //   const history = createMemoryHistory();
  //   history.push(`/non-existent-route`);

  //   render(
  //       <redux.Provider store={mockStore({})}>
  //         <Router history={history}>
  //           <App />
  //         </Router>
  //       </redux.Provider>
  //   );

  //   expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
  //   expect(screen.getByText(`Вернуться на главную`)).toBeInTheDocument();
  // });
});

