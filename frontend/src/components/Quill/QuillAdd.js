import React from 'react';
import QuillEditor from './QuillEditor';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css';

const QuillAdd = ({ placeholder, setData, elementId }) => {
    const onEditorChange = value => {
        setData(value);
    };

    return (
        <div className="quill-add">
            <QuillEditor
                placeholder={placeholder}
                onEditorChange={onEditorChange}
                editorId={elementId}
            />
        </div>
    )
};

export default QuillAdd;
