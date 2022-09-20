import dataService from "../../api/services/data.service";
export const SET_POSTS = 'SET_POSTS';
export const SET_IS_LOADING = 'SET_IS_LOADING';


export const setIsLoading = value => dispatch => {
    dispatch({
        type: SET_IS_LOADING,
        payload: value,
    });
}


export const setPosts = data => dispatch => {
    dispatch({
        type: SET_POSTS,
        payload: data,
    });
}

export const loadPosts = () => {


    return async dispatch => {
        dispatch(setIsLoading(true));
        try {
            let postReply = await dataService.posts();
            let usersReply = await dataService.users();

            const postWithUserData = postReply.data.map((post) => {
                const user = usersReply.data.find((user) => (post.userId === user.id));
                return { ...post, user };
            });
            console.log(postWithUserData[0]);
            dispatch(setPosts(postWithUserData));

            dispatch(setIsLoading(false));

        } catch (error) {
            console.log("WTF", error)
        }
    }
};

