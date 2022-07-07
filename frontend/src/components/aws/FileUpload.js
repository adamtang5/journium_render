import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../../store/aws';

const FileUpload = ({ elementId, handleUploadUrl }) => {
    const dispatch = useDispatch();
    const allUploads = useSelector(state => state.aws);
    // const [file, setFile] = useState();

    useEffect(() => {
        handleUploadUrl(allUploads[allUploads.length - 1]);
    }, [allUploads]);

    const handleUpload = async (e) => {
        e.stopPropagation();
        e.preventDefault();

        const hiddenInput = document.getElementById(elementId);

        if (hiddenInput.files && hiddenInput.files.length > 0) {
            // setFile(hiddenInput.files[0]);
            const newFile = hiddenInput.files[0];

            dispatch(uploadFile({ file: newFile }));
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
