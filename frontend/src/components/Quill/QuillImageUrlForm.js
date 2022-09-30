import { useState } from 'react';
import './QuillImageUrlForm.css';

const QuillImageUrlForm = ({
    setShowImageOptions,
    setShowImageUrlForm,
    handleImageUrl,
}) => {
    const [extImageUrl, setExtImageUrl] = useState('');
    const handleUrlChange = e => {
        setExtImageUrl(e.target.value);
    };

    const handleInsertUrl = e => {
        e.preventDefault();
        if (extImageUrl) {
            handleImageUrl();
            setShowImageUrlForm(false);
            setShowImageOptions(false);
            setExtImageUrl('');
        }
    };

    return (
        <>
            <label className="image-url-label">Image URL:</label>
            <input
                id="ext-image-url"
                className="image-url-input"
                value={extImageUrl}
                onChange={handleUrlChange}
            />
            <div
                className="image-url-submit cursor-pointer"
                onClick={handleInsertUrl}
            >Insert Image</div>
        </>
    )
};

export default QuillImageUrlForm;
