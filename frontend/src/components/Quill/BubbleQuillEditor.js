import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.bubble.css';
import { singlePublicFileUpload, singleMulterUpload } from '../../../../backend/awsS3';

function undoChange() {
    this.quill.history.undo();
}

function redoChange() {
    this.quill.history.redo();
}

async function handleImage(e) {
    e.stopPropagation();
    e.preventDefault();

    const hiddenImageInput = document.getElementById('bubble-hidden-image');

    if (hiddenImageInput.files && hiddenImageInput.files.length > 0) {
        const newFile = hiddenImageInput.files[0];
        console.log(newFile);

        // let formData = new FormData();
        // const options = {
        //     headers: {
        //         'content-type': 'multipart/form-data',
        //     },
        // };
        // formData.append("file", newFile);

        // upload to AWS S3, get back file URL
        const newImageUrl = await singlePublicFileUpload(newFile);

        if (newImageUrl) {
            const quill = this.quillRef.getEditor();
            quill.focus();

            let range = quill.getSelection();
            let position = range ? range.index : 0;

            quill.insertEmbed(position, "image", { src: newImageUrl, alt: newFile.name });
            quill.setSelection(position + 1);

            this.props.setImageUrl(newImageUrl);
        } else {
            return alert('failed to upload file');
        }

    }
}

const BubbleToolbar = ({ toolbarId }) => {
    return (
        <div id={toolbarId} className="position-relative">
            <span className="ql-formats">
                <button className="ql-header" value="1" />
                <button className="ql-header" value="2" />
            </span>
            <span className="ql-formats">
                <button className="ql-bold" />
                <button className="ql-italic" />
                <button className="ql-underline" />
                <button className="ql-strike" />
                <button className="ql-code-block" />
                <button className="ql-blockquote" />
                <button className="ql-link" />
            </span>
            <span className="ql-formats">
                <button className="ql-list" value="ordered" />
                <button className="ql-list" value="bullet" />
                <button className="ql-indent" value="-1" />
                <button className="ql-indent" value="+1" />
            </span>
            <span className="ql-formats position-absolute invisible">
                <button
                    id="bubble-hidden-undo"
                    className="ql-undo"
                />
                <button
                    id="bubble-hidden-redo"
                    className="ql-redo"
                />
            </span>
            <span className="ql-formats position-absolute invisible">
                {/* <span className="ql-formats"> */}
                <button className="ql-image" />
                <button
                    id="bubble-hidden-video"
                    className="ql-video"
                />
            </span>
            <span className="ql-formats">
                <button className="ql-clean" />
            </span>
        </div>
    );
};

class BubbleQuillEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorHtml: this.props.initialHtml || '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.undoChange = undoChange.bind(this);
        this.redoChange = redoChange.bind(this);
        this.handleImage = handleImage.bind(this);
        this.quillRef = React.createRef();
    };

    handleChange(html) {
        // console.log(this);
        this.setState({ editorHtml: html },
            () => this.props.onEditorChange(this.state.editorHtml));
        console.log(this.state.editorHtml);
    };

    setValue(html) {
        console.log(`setting value of ${this}`);
        this.setState({ editorHtml: html });
        console.log(this.state.editorHtml);
    }

    render() {
        return (
            <div className="bubble-quill-editor">
                <BubbleToolbar
                    toolbarId={this.props.toolbarId}
                    hiddenRedoRef={this.props.hiddenRedoRef}
                    hiddenUndoRef={this.props.hiddenUndoRef}
                />
                <ReactQuill
                    theme="bubble"
                    ref={this.quillRef}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={this.modules}
                    formats={this.formats}
                    placeholder={this.props.placeholder}
                />
                <input
                    id="bubble-hidden-image"
                    type="file"
                    accepts="image/*"
                    onChange={this.handleImage}
                    hidden
                />
            </div>
        );
    };

    modules = {
        toolbar: {
            container: "#" + this.props.toolbarId,
            handlers: {
                undo: undoChange,
                redo: redoChange,
                // image: handleImage,
            }
        },
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
        history: {
            delay: 500,
            maxStack: 1000,
            userOnly: false,
        }
    };

    formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'code-block',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
    ];
}

BubbleQuillEditor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' },],
        ['bold', 'italic', 'underline', 'strike', 'code-block', 'blockquote', 'link',],
        [{ 'list': 'ordered' }, { 'list': 'ordered' }, { 'indent': '-1' }, { 'indent': '+1' },],
        ['image', 'video',],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
    history: {
        delay: 500,
        maxStack: 1000,
        userOnly: false,
    }
};

BubbleQuillEditor.formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'code-block',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
];

// PropType validation
BubbleQuillEditor.propTypes = {
    placeholder: PropTypes.string,
    editorId: PropTypes.string,
    onEditorChange: PropTypes.func,
};

export default BubbleQuillEditor;
