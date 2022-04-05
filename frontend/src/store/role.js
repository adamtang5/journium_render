import { csrfFetch } from "./csrf";

const LOAD_ROLES = 'role/LOAD_ROLES';

const loadRoles = (roles) => ({
    type: LOAD_ROLES,
    roles,
});

export const fetchRoles = () => async (dispatch) => {
    const res = await csrfFetch('/api/roles');
    const data = await res.json();
    dispatch(loadRoles(data.roles));
    return res;
}

const initialState = {
    roles: null,
};

const roleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ROLES: {
            const newState = Object.assign({}, state);
            newState.roles = action.roles;
            return newState;
        }
        default:
            return state;
    }
};

export default roleReducer;
