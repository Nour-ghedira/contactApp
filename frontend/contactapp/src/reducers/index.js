import contactReducer from './contact.Reducers';

import { combineReducers } from 'redux';

const rootReducers=combineReducers({
    contact:contactReducer
})

export default rootReducers;