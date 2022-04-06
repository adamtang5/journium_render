import { csrfFetch } from "./csrf";

const LOAD_USER = 'user/loadUser';

const load = user => ({
    type: LOAD_USER,
    user,
});

export const fetchUser = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${id}`);
    const data = await res.json();
    dispatch(load(data.user));
    return res;
};

const initialState = {
    users: {},
};

/*
state.user = {
    users: {
        [id]: {
            id: ...,
            email: ...,
            displayName: ...,
            avatarUrl: ...,
            roleId: ...,
            createdAt: ...,
            updatedAt: ...,
        },
        [id]: {
            id: ...,
            email: ...,
            displayName: ...,
            avatarUrl: ...,
            roleId: ...,
            createdAt: ...,
            updatedAt: ...,
        },
    },
}
*/

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER: {
            const newState = Object.assign({}, state);
            newState.users[action.user.id] = action.user;
            return newState;
        }
        default:
            return state;
    }
};

export default userReducer;
