import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {createAPI} from './api/api';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import reducers from './redux/reducer';
import {checkAuth} from './redux/api-actions';
import {AuthorizationStatus} from './common/const';
import {authorizeStatusActionCreator} from './redux/action';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from "./browser-history";


const api = createAPI(
    () => store.dispatch(authorizeStatusActionCreator(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);

window.store = store;

