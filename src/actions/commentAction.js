// import { COMMENTS_LOADING, GET_COMMENTS, GET_COMMENT } from './types';
// import axios from 'axios';
// // import { returnErrors } from './errorActions';
// // import { tokenConfig } from './authActions'

// export const getComments = () => dispatch => {
//     dispatch({
//         type: COMMENTS_LOADING
//     });

//     axios.get(`http://127.0.0.1:8000/api/comments/${post_id}`).then(res=>
//         dispatch({
//             type: GET_COMMENTS,
//             payload: res.data,
//         })
//     )
//     //.catch(err => {err.response.data, err.response.status})
// }

// export const getComment = (slug) => dispatch => {
//     dispatch({
//         type: COMMENTS_LOADING
//     });

//     axios.get(`http://127.0.0.1:8000/api/comments/${post_id}`).then(res=>
//         dispatch({
//             type: GET_COMMENT,
//             payload: res.data,
//         })
//     )
//     //.catch(err => {err.response.data, err.response.status})
// }
