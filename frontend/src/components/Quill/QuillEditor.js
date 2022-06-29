import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import SnowQuillEditor from './SnowQuillEditor';

// const SnowToolbar = ({ elementId }) => {
//     return (
//         <div id={elementId}>
//             <span className="ql-formats">
//                 <button className="ql-image" />
//                 <button className="ql-video" />
//             </span>
//         </div>
//     )
// }

class QuillEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorHtml: '',
            theme: 'bubble',
        }
        this.handleChange = this.handleChange.bind(this);
        this.reactQuillRef = null;
    };

    handleChange(html) {
        this.setState({ editorHtml: html },
            () => this.props.onEditorChange(this.state.editorHtml));
    };

    render() {
        return (
            <div id={this.props.editorId}>
                <SnowQuillEditor elementId={"snow-toolbar"} />
                <ReactQuill
                    theme={this.state.theme}
                    ref={el => this.reactQuillRef = el}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={QuillEditor.modules}
                    formats={QuillEditor.formats}
                    // bounds={'.quill-editor'}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}

QuillEditor.modules = {
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
};

QuillEditor.formats = [
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
QuillEditor.propTypes = {
    placeholder: PropTypes.string,
    editorId: PropTypes.string,
    onEditorChange: PropTypes.func,
};

export default QuillEditor;
