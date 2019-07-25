import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const middleware = [thunk];

const intialState = {};

const store = createStore(
    rootReducer,
    intialState,
    compose(
        applyMiddleware(...middleware)
        ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;