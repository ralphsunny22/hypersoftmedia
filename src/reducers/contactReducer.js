import { ADD_CONTACT, ADD_CONTACT_FAIL } from '../actions/types';

const initialState = {
    contactSuccessMsg: '',
};

export default function postReducer(state = initialState, action){

    switch (action.type) {
        
        case ADD_CONTACT:
            return {
                ...state,
                contactSuccessMsg: action.payload.success //boolean true

            }
        case ADD_CONTACT_FAIL:
            return {
                ...state,
                contactSuccessMsg: ''
            }

        default:
            return state;
    }

}