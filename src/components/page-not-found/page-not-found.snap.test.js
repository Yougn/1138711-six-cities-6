import React from 'react';
import {render} from '@testing-library/react';
import PageNotFound from './page-not-found';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';


it(`PageNotFound should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <PageNotFound />
      </Router>
  );
  const headerElement = getByText(`404. Page not found`);
  const linkElement = getByText(`Вернуться на главную`);

  expect(headerElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});

