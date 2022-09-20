import { SET_POSTS, SET_IS_LOADING } from '../actions/appActions';

const initialState = {
    posts: {},
    isLoading: false
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.payload };
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
}

export default appReducer;