import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.bubble.css';
import FileUpload from '../aws/FileUpload';

const BlockEmbed = Quill.import('blots/block/embed');

class ImageBlot extends BlockEmbed {

    static create(value) {
        const imgTag = super.create();
        imgTag.setAttribute('src', value.src);
        imgTag.setAttribute('alt', value.alt);
        imgTag.setAttribute('class', 'story-media');
        return imgTag;
    }

    static value(node) {
        return {
            src: node.getAttribute('src'),
            alt: node.getAttribute('alt'),
        };
    }
}

ImageBlot.blotName = 'image';
ImageBlot.tagName = 'img';
Quill.register(ImageBlot);

function undoChange() {
    this.quill.history.undo();
}

function redoChange() {
    this.quill.history.redo();
}

function handleUploadUrl(file) {
    const quill = this.quillRef.current.getEditor();
    quill.focus();

    let range = quill.getSelection();
    let position = range ? range.index : 0;

    quill.insertEmbed(position, "image", { src: file.imageUrl, alt: file.originalName });
    // quill.insertEmbed(position, "image", file.imageUrl);
    quill.setSelection(position + 1);

    this.props.handleInsertImage(file.imageUrl);    // will deprecate
}

function handleExtImageUrl(url) {
    const quill = this.quillRef.current.getEditor();
    quill.focus();

    let range = quill.getSelection();
    let position = range ? range.index : 0;

    quill.insertEmbed(position, "image", { src: url, alt: 'External Image' });
    quill.setSelection(position + 1);
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
        this.handleUploadUrl = handleUploadUrl.bind(this);
        this.handleExtImageUrl = handleExtImageUrl.bind(this);
        this.quillRef = React.createRef();
    };

    handleChange(html) {
        this.setState({ editorHtml: html },
            () => this.props.onEditorChange(this.state.editorHtml));
        console.log(this.state.editorHtml);
    };

    setValue(html) {
        console.log(`setting value of ${this}`);
        this.setState({ editorHtml: html });
        console.log(this.state.editorHtml);
    }

    handleHiddenExtUrlInsert(e) {
        e.preventDefault();
        e.stopPropagation();
        const extImageUrlInput = document.getElementById('ext-image-url');
        this.handleExtImageUrl(extImageUrlInput.value);
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
                <FileUpload
                    elementId="bubble-hidden-image"
                    handleUploadUrl={this.handleUploadUrl}
                />
                <button
                    id="bubble-hidden-link"
                    onClick={e => this.handleHiddenExtUrlInsert(e)}
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
