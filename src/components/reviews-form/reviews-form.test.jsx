import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ReviewsForm from './reviews-form';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';


const mockStore = configureStore({});
const history = createMemoryHistory();

test(`Should ReviewsForm render correctly and receive value`, () => {

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <ReviewsForm />
        </Router>
      </Provider>
  );

  userEvent.type(screen.getByRole(`textbox`), `Hello, World!`);
  expect(screen.getByRole(`textbox`)).toHaveValue(`Hello, World!`);
});

// test(`Submits`, () => {
//   const onSubmit = jest.fn();
//   const store = mockStore({
//     onSubmit
//   });

//   const {getByTestId} = render(
//       <Provider store={store}>
//         <Router history={history}>
//           <ReviewsForm />
//         </Router>
//       </Provider>
//   );

//   fireEvent.submit(getByTestId(`formid`));
//   expect(onSubmit).toHaveBeenCalled();
// });

