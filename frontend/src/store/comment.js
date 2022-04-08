import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = 'comment/loadComments';
const NEW_COMMENT = 'comment/newComment';
const REMOVE_COMMENT = 'comment/deleteComment';

const loadComments = (comments) => ({
    type: LOAD_COMMENTS,
    comments,
});

const newComment = (comment) => ({
    type: NEW_COMMENT,
    comment,
});

const removeComment = (id) => ({
    type: REMOVE_COMMENT,
    id,
});

export const fetchComments = (storyId) => async (dispatch) => {
    const res = await csrfFetch(`/api/stories/${storyId}/comments`);
    const data = await res.json();
    dispatch(loadComments(data));
    return res;
};

export const createComment = (comment) => async (dispatch) => {
    const res = await csrfFetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(newComment(data));
        return data;
    }
};

export const editComment = (comment) => async (dispatch) => {
    const { id, userId, storyId, content } = comment;
    const res = await csrfFetch(`/api/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            userId,
            storyId,
            content,
        }),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(newComment(data));
        return data;
    }
};

export const deleteComment = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        dispatch(removeComment(id));
        return true;
    }
};

const initialState = {
    comments: {},
};

/*
state.comment = {
    comments: {
        [id]: {
            id: ...,
            userId: ...,
            storyId: ...,
            content: ...,
            createdAt: ...,
            updatedAt: ...,
        },
        [id]: {
            id: ...,
            userId: ...,
            storyId: ...,
            content: ...,
            createdAt: ...,
            updatedAt: ...,
        },
    },
}
*/

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS: {
            const newState = Object.assign({}, state);
            action.comments.forEach(comment => {
                newState.comments[comment.id] = comment;
            });
            return newState;
        }
        case NEW_COMMENT: {
            const newState = Object.assign({}, state);
            newState.comments[action.comment.id] = action.comment;
            return newState;
        }
        case REMOVE_COMMENT: {
            const newState = Object.assign({}, state);
            delete newState.comments[action.id];
            return newState;
        }
        default:
            return state;
    }
};

export default commentReducer;
