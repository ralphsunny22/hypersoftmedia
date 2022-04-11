import { combineReducers } from 'redux';

import postReducer from './postReducer';
import commentReducer from './commentReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    post: postReducer,
    comment: commentReducer,
    error: errorReducer,
    auth: authReducer,
})