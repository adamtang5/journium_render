import React from 'react';
import QuillEditor from './QuillEditor';
import './TextEditor.css';

const QuillEdit = ({
    placeholder,
    setData,
    handleInsertImage,
    elementId,
    snowToolbarId,
    bubbleToolbarId,
    initialHtml
}) => {
    const onEditorChange = value => {
        setData(value);
    };

    return (
        <div className="quill-edit">
            <QuillEditor
                placeholder={placeholder}
                setData={setData}
                handleInsertImage={handleInsertImage}
                // onEditorChange={onEditorChange}
                editorId={elementId}
                snowToolbarId={snowToolbarId}
                bubbleToolbarId={bubbleToolbarId}
                initialHtml={initialHtml}
            />
        </div>
    )
};

export default QuillEdit;
