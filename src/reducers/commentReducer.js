// import { COMMENTS_LOADING, GET_COMMENTS, GET_COMMENT } from '../actions/types';

// const initialState = {
//     comments: [],
//     isLoadingComments: false,
//     comment: {},
//     commentSuccessMsg: ''
// };

// export default function postReducer(state = initialState, action){

//     switch (action.type) {
//         case COMMENTS_LOADING:
//             return {
//                 ...state,
//                 isLoadingComments: true
//             }

//         case GET_COMMENTS:
//             return {
//                 ...state,
//                 comments: action.payload.data,
//                 isLoadingPosts: false
//             }

//         case GET_COMMENT:
//             return {
//                 ...state,
//                 comment: action.payload.data,
//             }

//         default:
//             return state;
//     }

// }