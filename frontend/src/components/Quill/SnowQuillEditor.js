import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CustomUndo = () => {
    return (
        <svg viewBox="0 0 18 18">
            <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
            <path
                className="ql-stroke"
                d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
            />
        </svg>
    )
};

const CustomRedo = () => {
    return (
        <svg viewBox="0 0 18 18">
            <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
            <path
                className="ql-stroke"
                d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
            />
        </svg>
    )
};

// Quill Toolbar component
const SnowQuillToolbar = ({ toolbarId }) => {
    return (
        <div id={toolbarId}>
            <span className="ql-formats">
                <button className="ql-undo">
                    <CustomUndo />
                </button>
                <button className="ql-redo">
                    <CustomRedo />
                </button>
            </span>
            <span className="ql-formats">
                <button className="ql-image" />
                <button className="ql-video" />
            </span>
        </div>
    )
};


class SnowQuillEditor extends React.Component {

    toolbarId;
    undoChange;
    redoChange;
    _isMounted;

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="snow-quill-editor">
                <SnowQuillToolbar toolbarId={this.props.toolbarId} />
                <ReactQuill
                    theme="snow"
                    modules={this.modules}
                    formats={this.formats}
                    style={{ display: 'none' }}
                />
            </div>
        )
    };

    // Modules object for setting up the Quill editor
    modules = {
        toolbar: {
            container: "#" + this.props.toolbarId,
            handlers: {
                undo: this.props.undoChange,
                redo: this.props.redoChange,
                image: this.props.handleImage,
                video: this.props.handleVideo,
            },
        },
        history: {
            delay: 500,
            maxStack: 100,
            userOnly: true,
        },
    };

    // Formats objects for setting up the Quill editor
    formats = [
        "image",
        "video",
    ];
};

export default SnowQuillEditor;
