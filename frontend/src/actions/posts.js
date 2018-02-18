import {fetchPosts} from '../utils/serverApi'

export const LOAD_POSTS = 'LOAD_POSTS';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const EDIT_POST = 'EDIT_POST';

export function loadPosts(category) {
    return (dispatch) => {
        fetchPosts(category)
            .then((posts) => dispatch({
                type: LOAD_POSTS,
                posts,
                category
            }))
    }
}

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function removePost(postId) {
    return {
        type: REMOVE_POST,
        postId
    }
}

export function editPost(post) {
    return {
        type: EDIT_POST,
        post
    }
}