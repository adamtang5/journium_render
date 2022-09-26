import { csrfFetch } from "./csrf";

const LOAD_STORIES = 'story/loadStories';
const NEW_STORY = 'story/newStory';
const REMOVE_STORY = 'story/deleteStory';

const loadStories = (stories) => ({
    type: LOAD_STORIES,
    stories,
});

const newStory = (story) => ({
    type: NEW_STORY,
    story,
});

const removeStory = (id) => ({
    type: REMOVE_STORY,
    id,
});

export const fetchStories = () => async (dispatch) => {
    const res = await csrfFetch('/api/stories');
    const data = await res.json();
    dispatch(loadStories(data.stories));
    return res;
};

export const createStory = (story) => async (dispatch) => {
    const res = await csrfFetch('/api/stories', {
        method: 'POST',
        body: JSON.stringify(story),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(newStory(data));
        return data;
    }
};

export const editStory = (story) => async (dispatch) => {
    const { id, userId, title, content, imageUrl, videoUrl } = story;
    const res = await csrfFetch(`/api/stories/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            userId,
            title,
            content,
            imageUrl,
            videoUrl,
        }),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(newStory(data));
        return data;
    }
};

export const deleteStory = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/stories/${id}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        dispatch(removeStory(id));
        return true;
    }
};

export const likeStory = (like) => async (dispatch) => {
    const res = await csrfFetch(`/api/likes`, {
        method: 'POST',
        body: JSON.stringify(like),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(newStory(data));
        return data;
    }
};

export const unlikeStory = (unlike) => async (dispatch) => {
    const res = await csrfFetch(`/api/likes`, {
        method: 'DELETE',
        body: JSON.stringify(unlike),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(newStory(data));
        return data;
    }
};

const initialState = {};

/*
state.stories = {
    [id]: {
        id: ...,
        userId: ...,
        title: ...,
        content: ...,
        imageUrl: ...,
        videoUrl: ...,
        likes: {
            userIds: [...],
        },
        createdAt: ...,
        updatedAt: ...,
    },
    [id]: {
        id: ...,
        userId: ...,
        title: ...,
        content: ...,
        imageUrl: ...,
        videoUrl: ...,
        createdAt: ...,
        updatedAt: ...,
    },
}
*/

const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STORIES: {
            const newState = Object.assign({}, state);
            action.stories.forEach(story => {
                newState[story.id] = {
                    ...story,
                    Likes: {
                        userIds: story.Likes.map(like => like.userId),
                    },
                };
            });
            return newState;
        }
        case NEW_STORY: {
            const newState = Object.assign({}, state);
            newState[action.story.id] = {
                ...action.story,
                Likes: {
                    userIds: action.story.Likes?.map(like => like.userId),
                },
            };
            return newState;
        }
        case REMOVE_STORY: {
            const newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        }
        default:
            return state;
    }
};

export default storyReducer;
