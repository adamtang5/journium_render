import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../../store/aws';

const FileUpload = ({ elementId, handleUploadUrl }) => {
    const dispatch = useDispatch();
    const allUploads = useSelector(state => state.aws);
    // const [file, setFile] = useState();

    const handleUpload = async (e) => {
        e.stopPropagation();
        e.preventDefault();

        const hiddenInput = document.getElementById(elementId);

        if (hiddenInput.files && hiddenInput.files.length > 0) {
            // setFile(hiddenInput.files[0]);
            const newFile = hiddenInput.files[0];

            dispatch(uploadFile(newFile));

            const stateNewFile = allUploads[allUploads.length - 1];

            if (stateNewFile) {
                handleUploadUrl(stateNewFile);
                return;
            } else {
                return alert('failed to upload file');
            }
        }
    }

    return (
        <input
            id={elementId}
            type="file"
            accepts="image/*"
            onChange={handleUpload}
            hidden
        />
    )
};

export default FileUpload;
