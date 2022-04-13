import { base_url, ADD_CONTACT, ADD_CONTACT_FAIL } from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';
// import { tokenConfig } from './authActions'

export const addContact = newContact => (dispatch) => {
  
    //slug here is post_slug
    axios.post(`${base_url}/contact`, newContact).then(res =>
    dispatch({
      type: ADD_CONTACT,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'ADD_CONTACT_FAIL'));
      dispatch({
        type: ADD_CONTACT_FAIL
      });
      console.log(err.response.data)
  });
  };


