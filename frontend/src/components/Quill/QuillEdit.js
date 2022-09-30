import React from 'react';
import QuillEditor from './QuillEditor';
import './TextEditor.css';

const QuillEdit = ({
    placeholder,
    setData,
    elementId,
    snowToolbarId,
    bubbleToolbarId,
    initialHtml
}) => {
    // const onEditorChange = value => {
    //     setData(value);
    // };

    return (
        <div className="quill-edit">
            <QuillEditor
                placeholder={placeholder}
                setData={setData}
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
