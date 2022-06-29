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

// Undo and redo functions for Custom Toolbar
// export function undoChange() {
//     console.log(this);
//     this.quill.history.undo();
// };

// export function redoChange() {
//     console.log(this);
//     this.quill.history.redo();
// };

// Quill Toolbar component
const SnowQuillToolbar = ({ toolbarId }) => {
    // const undoButtonRef = React.createRef();
    // const redoButtonRef = React.createRef();

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
            {/* <span className="ql-formats">
                <select className="ql-header">
                    <option value="">Normal text</option>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
            </span>
            <span className="ql-formats">
                <button className="ql-bold" />
                <button className="ql-italic" />
                <button className="ql-underline" />
                <button className="ql-strike" />
                <button className="ql-script" value="super" />
                <button className="ql-script" value="sub" />
                <button className="ql-code-block" />
                <button className="ql-link" />
            </span>
            <span className="ql-formats">
                <button className="ql-list" value="ordered" />
                <button className="ql-list" value="bullet" />
                <button className="ql-indent" value="-1" />
                <button className="ql-indent" value="+1" />
            </span> */}
            <span className="ql-formats">
                <button className="ql-image" />
                <button className="ql-video" />
            </span>
            {/* <span className="ql-formats">
                <button className="ql-clean" />
            </span> */}
        </div>
    )
};


class SnowQuillEditor extends React.Component {

    // placeholder;
    // onEditorChange;
    toolbarId;
    undoChange;
    redoChange;
    // initialHtml;
    _isMounted;

    // state = {
    //     editorHtml: this.props.initialHtml || "",
    //     reactQuillRef: this.props.hiddenQuillRef || null,
    // };

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    // insertImage = async (e) => {
    //     e.stopPropagation();
    //     e.preventDefault();

    //     if (e.currentTarget && e.currentTarget.files && e.currentTarget.files.length > 0) {
    //         const file = e.currentTarget.files[0];

    //         let formData = new FormData();
    //         const options = {
    //             headers: {
    //                 'content-type': 'multipart/form-data',
    //             },
    //         };
    //         formData.append("file", file);

    //         // upload to AWS S3, get back file URL
    //         // const res = await [upload to s3]
    //         if (res.ok) {
    //             const quill = this.reactQuillRef.getEditor();
    //             quill.focus();

    //             let range = quill.getSelection();
    //             let position = range ? range.index : 0;

    //             // quill.insertEmbed(position, "image", { src: [s3 file URL], alt: [original file name?]});
    //             quill.setSelection(position + 1);

    //             if (this._isMounted) {
    //                 this.setState({
    //                     // files: [...this.state.files, [s3 file URL]],
    //                 }, () => { this.props.onFilesChange(this.state.files) });
    //             }
    //         } else {
    //             return alert('failed to upload file');
    //         }
    //     }
    // };

    // handleChange = html => {
    //     // console.log(this);
    //     this.setState({
    //         editorHtml: html
    //     }, () => {
    //         this.props.onEditorChange(this.state.editorHtml);
    //     });
    //     // console.log(this.state.editorHtml);
    // };

    render() {
        return (
            <div className="snow-quill-editor">
                <SnowQuillToolbar toolbarId={this.props.toolbarId} />
                <ReactQuill
                    theme="snow"
                    // ref={this.state.reactQuillRef}
                    // value={this.state.editorHtml}
                    // onChange={this.handleChange}
                    // placeholder={this.props.placeholder}
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
        // "header",
        // "bold",
        // "italic",
        // "underline",
        // "strike",
        // "script",
        // "code-block",
        // "blockquote",
        // "list",
        // "bullet",
        // "indent",
        // "link",
        "image",
        "video",
    ];
};

export default SnowQuillEditor;
