import { createStore, combineReducers, applyMiddleware } from 'redux';
import dataReducer from './data/dataReducer';
import searchReducer from './search/searchReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    dataReducer: dataReducer,
    searchReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

//console.log(store.getState().dataReducer);

export default store;