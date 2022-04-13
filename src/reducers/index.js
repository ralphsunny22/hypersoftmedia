import { combineReducers } from 'redux';

import postReducer from './postReducer';
import commentReducer from './commentReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import contactReducer from './contactReducer';

export default combineReducers({
    post: postReducer,
    comment: commentReducer, //not used
    error: errorReducer,
    auth: authReducer,
    contact: contactReducer,
})