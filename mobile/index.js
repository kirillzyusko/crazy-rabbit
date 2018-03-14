import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import Application from './src/App';
import reducer from './src/reducers'

const initialGameState = {
    currentHeight: -1,
    futureHeight: 0,
    lastObjectCreatedAt: new Date(),
    blocks: []
};

const initialState = {
    action: null,
    gameState: initialGameState,
};

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

const configureStore = (initialState) => {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware,
        ),
    );
    return createStore(reducer, initialState, enhancer);
};

const store = configureStore({});

store.dispatch({
    type: 'JUMP',
    payload: {}
});

const App = () => {
    return (
        <Provider store={store}>
            <Application/>
        </Provider>
    )
};

AppRegistry.registerComponent('mobile', () => App);
