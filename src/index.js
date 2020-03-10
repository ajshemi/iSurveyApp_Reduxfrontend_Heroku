import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import productReducer from './Redux/productReducer'
import userReducer from './Redux/userReducer'
import commentReducer from './Redux/commentReducer';
import sentimentReducer from './Redux/sentimentReducer';
import emotionReducer from './Redux/emotionReducer';
import ratingReducer from './Redux/ratingReducer'
import 'semantic-ui-css/semantic.min.css'

const rootReducer = combineReducers(
    {
        products: productReducer,
        user:userReducer,
        comments:commentReducer,
        sentiments:sentimentReducer,
        emotions:emotionReducer,
        ratings:ratingReducer
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'))