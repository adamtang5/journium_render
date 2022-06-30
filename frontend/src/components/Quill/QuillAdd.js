import React from 'react';
import QuillEditor from './QuillEditor';
import './TextEditor.css';

const QuillAdd = ({ placeholder, setData, setImageUrl, elementId, snowToolbarId, bubbleToolbarId }) => {
    const onEditorChange = value => {
        setData(value);
    };

    return (
        <div className="quill-add">
            <QuillEditor
                placeholder={placeholder}
                setData={setData}
                setImageUrl={setImageUrl}
                // onEditorChange={onEditorChange}
                editorId={elementId}
                snowToolbarId={snowToolbarId}
                bubbleToolbarId={bubbleToolbarId}
            />
        </div>
    )
};

export default QuillAdd;
