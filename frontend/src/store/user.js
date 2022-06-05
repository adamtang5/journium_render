import { csrfFetch } from "./csrf";

const LOAD_USER = 'user/loadUser';
const CLEAR_USERS = 'user/ClearUsers';

const load = user => ({
    type: LOAD_USER,
    user,
});

const clear = () => ({
    type: CLEAR_USERS,
})

export const fetchUser = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${id}`);
    const data = await res.json();
    dispatch(load(data.user));
    return res;
};

export const clearUsers = () => async (dispatch) => {
    dispatch(clear());
    return;
}

const initialState = {};

/*
state.users = {
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
}
*/

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER: {
            const newState = Object.assign({}, state);
            newState[action.user.id] = action.user;
            return newState;
        }
        case CLEAR_USERS:
            return initialState;
        default:
            return state;
    }
};

export default userReducer;
