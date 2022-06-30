import { csrfFetch } from "./csrf";

const NEW_UPLOAD = 'aws/newUpload';
const CLEAR_UPLOADS = 'aws/clearUploads';

const newUpload = (fileUrl) => ({
    type: NEW_UPLOAD,
    fileUrl,
});

const clearUploads = () => ({
    type: CLEAR_UPLOADS,
})

export const uploadFile = (file) => async (dispatch) => {
    const res = await csrfFetch('/api/storage', {
        method: 'POST',
        file,
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(newUpload(data.imageUrl));
        return data;
    }
};

export const clearFiles = () => (dispatch) => {
    dispatch(clearUploads());
};

const initialState = [];

/*
state.aws = [
    fileUrl,
    fileUrl,
    ...
]
*/

const awsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_UPLOADS: {
            return initialState;
        }
        case NEW_UPLOAD: {
            const newState = [
                ...state,
                action.fileUrl,
            ];
            return newState;
        }
        default:
            return state;
    }
}

export default awsReducer;
