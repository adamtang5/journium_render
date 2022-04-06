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
    stories: null,
};

const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STORIES: {
            const newState = Object.assign({}, state);
            newState.stories = action.stories;
            return newState;
        }
        default:
            return state;
    }
};

export default storyReducer;
