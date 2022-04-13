import { base_url, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, USER_LOADED, LOGOUT_SUCCESS } from './types';
import axios from 'axios';
import { returnErrors } from './errorActions'

export const register = (user) => dispatch => {

    const config = {
        headers: {
            "Content-type":"application/json"
        }
    }
    //https://portfolio.hypersoftmedia.com
    //https://portfolio.hypersoftmedia.com
    axios.post(`${base_url}/auth/register`, user, config).then(res=>
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        })
    )
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
    dispatch({
        type: REGISTER_FAIL
    });
    console.log(err.response.data)
    });
}

//login
export const login = (user) => dispatch => {

    const config = {
        headers: {
            "Content-type":"application/json"
        }
    }

    axios.post(`${base_url}/auth/login`, user, config).then(res=>
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })
    )
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
    dispatch({
        type: LOGIN_FAIL
    });
    });
}

//loadUser
export const loadUser = () => {
  return (dispatch, getState) => {
    axios.get(`${base_url}/auth/user-profile`, tokenConfig(getState)).then(res => 
    dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response?.data, err.response?.status));
      dispatch({
      type: AUTH_ERROR
  });
  });

  }
}

//logout
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

  //Setup config/headers and token
  export const tokenConfig = (getState) => {

    //get token from localStorage
    const token = getState().auth.token
    //console.log(token);

    //Headers
    const config = {
      headers:{
        "Content-type" : "application/json"
      }
    }

    if(token){
      config.headers['Authorization'] = 'Bearer ' + token
    }

    return config;
  }



