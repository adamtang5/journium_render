const RESTORE = 'session/RESTORE';
const REMOVE = 'session/REMOVE';

const restore = user => ({
    type: RESTORE,
    user,
});

const remove = () => ({
    type: REMOVE,
})

const initialState = {
    user: null,
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTORE:
            return { user: action.user };
        case REMOVE:
            return initialState;
        default:
            return state;
    }
};

export default sessionReducer;
