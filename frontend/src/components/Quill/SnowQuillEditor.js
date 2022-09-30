import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import QuillImageUrlForm from './QuillImageUrlForm';

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

const CustomImage = () => {
    return (
        <svg viewBox="0 0 18 18">
            <rect className="ql-stroke" height="10" width="12" x="3" y="4" />
            <circle className="ql-fill" cx="6" cy="7" r="1" />
            <polyline className="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12" />
        </svg>
    )
};

const CustomImageUpload = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" />
        </svg>
    )
};

const CustomLink = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
        </svg>
    )
};

// Quill Toolbar component
const SnowQuillToolbar = ({
    toolbarId,
    handleImageUpload,
    handleImageUrl,
}) => {
    const [showImageOptions, setShowImageOptions] = useState(false);
    const [showImageUrlForm, setShowImageUrlForm] = useState(false);

    const toggleShowImageOptions = e => {
        e.preventDefault();
        setShowImageOptions(!showImageOptions);
    };

    const toggleShowImageUrlForm = e => {
        e.preventDefault();
        setShowImageUrlForm(!showImageUrlForm);
    };

    const handleUploadClick = e => {
        setShowImageOptions(false);
        handleImageUpload();
    };

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
            <span className="ql-formats position-relative">
                <button
                    className="ql-image-toggle"
                    onClick={toggleShowImageOptions}
                >
                    <CustomImage />
                </button>
                <div
                    className="ql-image-options position-absolute"
                    hidden={!showImageOptions}
                >
                    <button
                        className="ql-image-upload cursor-pointer"
                        onClick={handleUploadClick}
                    >
                        <CustomImageUpload />
                    </button>
                    <button
                        className="ql-image-url cursor-pointer"
                        onClick={toggleShowImageUrlForm}
                    >
                        <CustomLink />
                    </button>
                    <div
                        className={`ql-image-url-form position-absolute flex-row${!showImageUrlForm ? ' invisible' : ''}`}
                    >
                        <QuillImageUrlForm
                            setShowImageOptions={setShowImageOptions}
                            setShowImageUrlForm={setShowImageUrlForm}
                            handleImageUrl={handleImageUrl}
                        />
                    </div>
                </div>
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
                <SnowQuillToolbar
                    toolbarId={this.props.toolbarId}
                    handleImageUpload={this.props.handleImageUpload}
                    handleImageUrl={this.props.handleImageUrl}
                />
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
