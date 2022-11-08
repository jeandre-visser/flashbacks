import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = configureStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
