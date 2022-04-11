import { csrfFetch } from "./csrf";

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = user => ({
    type: SET_USER,
    payload: user,
});

const removeUser = () => ({
    type: REMOVE_USER,
})

export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
};

export const demoLogin = () => async (dispatch) => {
    const user = {
        email: 'demo@user.io',
        password: 'password',
    };
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(user),
    });
    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
};

export const restoreUser = () => async (dispatch) => {
    const res = await csrfFetch('/api/session');
    const data = await res.json();
    dispatch(setUser(data.user));
    return data.user;
};

export const signup = (user) => async (dispatch) => {
    const { email, password, displayName, avatarUrl, roleId } = user;

    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            displayName,
            avatarUrl,
            roleId,
        }),
    });
    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
};

export const logout = () => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return res;
};

const initialState = {
    user: null,
};

/*
state.session = {
    user: {
        id: ...,
        email: ...,
        displayName: ...,
    }
}
*/

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            const newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        }
        case REMOVE_USER: {
            const newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        }
        default:
            return state;
    }
};

export default sessionReducer;
