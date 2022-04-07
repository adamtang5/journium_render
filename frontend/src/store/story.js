import { csrfFetch } from "./csrf";

const LOAD_STORIES = 'story/loadStories';
const NEW_STORY = 'story/newStory';

const loadStories = (stories) => ({
    type: LOAD_STORIES,
    stories,
});

const newStory = (story) => ({
    type: NEW_STORY,
    story,
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

const initialState = {
    stories: {},
};

/*
state.story = {
    stories: {
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
    },
}
*/

const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STORIES: {
            const newState = Object.assign({}, state);
            action.stories.forEach(story => {
                newState.stories[story.id] = story;
            })
            return newState;
        }
        case NEW_STORY: {
            const newState = Object.assign({}, state);
            newState.stories[action.story.id] = action.story;
            return newState;
        }
        default:
            return state;
    }
};

export default storyReducer;
