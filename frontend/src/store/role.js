import { csrfFetch } from "./csrf";

const LOAD_ROLES = 'role/loadRoles';

const loadRoles = (roles) => ({
    type: LOAD_ROLES,
    roles,
});

export const fetchRoles = () => async (dispatch) => {
    const res = await csrfFetch('/api/roles');
    const data = await res.json();
    dispatch(loadRoles(data.roles));
    return res;
};

const initialState = {};

const roleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ROLES:
            return { ...action.roles };
        default:
            return state;
    }
};

export default roleReducer;
