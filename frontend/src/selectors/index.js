import {createSelector} from 'reselect'
import _ from 'lodash'

const getPostsById = (state) => state.posts.byId;
const getSinglePost = (state, id) => state.posts.byId[id];
const getPostsLoading = (state) => state.posts.postsLoading;
const getSortProperty = (state) => state.posts.sort;
const getLastUpdate = (state) => state.posts.lastUpdate;
const getAddingPost = (state) => state.posts.postUpdating;

const getCommentsById = (state) => state.comments.byId;
const getCommentsUpdating = (state) => state.comments.commentsUpdating;

const getVotes = (state) => state.votes.byId;
const getVote = (state, id) => state.votes.byId[id];

const getAllCategories = (state) => state.categories;

export const getPosts = createSelector(
    [getPostsById, getVotes, getSortProperty],
    (postsById, votes, sortProperty) => {
        return _.orderBy(_.values(postsById)
            .filter((post) => !post.deleted)
            .map((post) => ({
            ...post,
            voteScore: votes[post.id].voteScore
        })), sortProperty, 'desc');
    }
);

export const makeGetPostById = () => (
    createSelector(
        [getSinglePost],
        (post) => post
    )
);

export const getComments = createSelector(
    [getCommentsById],
    (commentsById) => {
        return _.values(commentsById).filter((comment) => !comment.deleted)
    }
);

export const areCommentsUpdating = createSelector(
    [getCommentsUpdating],
    (commentsUpdating) => commentsUpdating
);

export const makeGetVote = () => (
    createSelector(
        [getVote],
        (vote) => vote
    )
);

export const getAddedPost = createSelector(
    [getLastUpdate, getPostsById],
    (lastUpdate, postsById) => (
        lastUpdate['ADD'] ? postsById[lastUpdate['ADD']] : undefined
    )
);

export const getEditedPost = createSelector(
    [getLastUpdate, getPostsById],
    (lastUpdate, postsById) => (
        lastUpdate['EDIT'] ? postsById[lastUpdate['EDIT']] : undefined
    )
);

export const getDeletedPostId = createSelector(
    [getLastUpdate],
    (lastUpdate) => (
        lastUpdate['DELETE'] ? lastUpdate['DELETE'] : undefined
    )
);

export const arePostsLoading = createSelector(
    [getPostsLoading],
    (postsLoading) => postsLoading
);

export const isAddingPost = createSelector(
    [getAddingPost],
    (addingPost) => {
        return addingPost
    }
);

export const getCategories = createSelector(
    [getAllCategories],
    (categories) => (categories)
);
