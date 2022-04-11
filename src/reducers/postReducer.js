import { POSTS_LOADING, GET_POSTS, GET_POST, ADD_POST_COMMENT, ADD_POST_COMMENT_FAIL } from '../actions/types';

const initialState = {
    posts: [],
    isLoadingPosts: false,
    post: {},
    randomPost: [],
    postComments: [],

    postComment: {},
    commentSuccessMsg: '',

    postSuccessMsg: ''
};

export default function postReducer(state = initialState, action){

    switch (action.type) {
        case POSTS_LOADING:
            return {
                ...state,
                isLoadingPosts: true
            }

        case GET_POSTS:
            return {
                ...state,
                posts: action.payload.data,
                isLoadingPosts: false
            }

        case GET_POST:
            return {
                ...state,
                post: action.payload.data.singlePost,
                randomPosts: action.payload.data.randomPosts,
                postComments: action.payload.data.singlePost.comments
            }

        case ADD_POST_COMMENT:
            return {
                ...state,
                postComments: [action.payload.data, ...state.postComments ],
                commentSuccessMsg: action.payload.success //boolean true

            }
        case ADD_POST_COMMENT_FAIL:
            return {
                ...state,
                postComment: {}
            }

        default:
            return state;
    }

}