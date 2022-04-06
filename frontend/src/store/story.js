import { csrfFetch } from "./csrf";

const LOAD_STORIES = 'story/loadStories';

const loadStories = (stories) => ({
    type: LOAD_STORIES,
    stories,
});

export const fetchStories = () => async (dispatch) => {
    const res = await csrfFetch('/api/stories');
    const data = await res.json();
    dispatch(loadStories(data.stories));
    return res;
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
        default:
            return state;
    }
};

export default storyReducer;
