import { csrfFetch } from "./csrf";

const NEW_UPLOAD = 'aws/newUpload';
const CLEAR_UPLOADS = 'aws/clearUploads';

const newUpload = (file) => ({
    type: NEW_UPLOAD,
    file,
});

const clearUploads = () => ({
    type: CLEAR_UPLOADS,
})

export const uploadFile = ({ file }) => async (dispatch) => {
    const { name, size, type } = file;
    const formData = new FormData();
    formData.append("filename", name);
    formData.append("filesize", size);
    formData.append("filetype", type);
    if (file) formData.append("image", file);

    const res = await csrfFetch('/api/storage', {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(newUpload(data));
        // return data;
    }
};

export const clearFiles = () => (dispatch) => {
    dispatch(clearUploads());
};

const initialState = [];

/*
state.aws = [
    {
        imageUrl: fileUrl,
        originalName: fileName,
    },
    {
        imageUrl: fileUrl,
        originalName: fileName,
    },
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
                action.file,
            ];
            return newState;
        }
        default:
            return state;
    }
}

export default awsReducer;
