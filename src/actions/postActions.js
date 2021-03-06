import { base_url, POSTS_LOADING, GET_POSTS, GET_POST, ADD_POST_COMMENT, ADD_POST_COMMENT_FAIL } from './types';
import axios from 'axios';
import { returnErrors } from './errorActions';
// import { tokenConfig } from './authActions'

export const addPostComment = newPostComment => (dispatch) => {
  
    //slug here is post_slug
    axios.post(`${base_url}/comments/${newPostComment.getAll('slug')}`, newPostComment).then(res =>
    dispatch({
      type: ADD_POST_COMMENT,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'ADD_POST_COMMENT_FAIL'));
      dispatch({
        type: ADD_POST_COMMENT_FAIL
      });
      console.log(err.response.data)
  });
  };

export const getPosts = () => dispatch => {
    dispatch({
        type: POSTS_LOADING
    });

    axios.get(`${base_url}/posts`).then(res=>
        dispatch({
            type: GET_POSTS,
            payload: res.data,
        })
    )
    ///.catch(err => {err.response.data, err.response.status})
}

export const getPost = (slug) => dispatch => {
    dispatch({
        type: POSTS_LOADING
    });

    axios.get(`${base_url}/posts/${slug}`).then(res=>
        dispatch({
            type: GET_POST,
            payload: res.data,
        })
    )
    //.catch(err => {err.response.data, err.response.status})
}
