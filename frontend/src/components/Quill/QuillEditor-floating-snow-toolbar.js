import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // adding css styles for `snow` theme
// import 'quill/dist/quill.bubble.css'; // adding css styles for `bubble` theme

// import debounce from 'lodash/debounce';

// import styles from './style.scss';

class QuillEditor extends PureComponent {
    static propTypes = {
        html: PropTypes.string,
        editorId: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.editor = React.createRef();
        this.config = {
            theme: 'snow',
            modules: {/* modules config */ },
        };
    }

    componentDidMount() {
        this.attachQuill();
    };

    attachQuill() {
        this.quill = new Quill(this.editor?.current, this.config);
        this.toolbar = this.quill.getModule('toolbar');
        this.toolbar.container.style.visibility = 'hidden';

        this.quill.on('selection-change', this.onSelectionChange);
        this.setDefaultContent();
    }

    setDefaultContent = () => {
        const quote = this.quill.clipboard.convert(this.props.html || '<p> </p>');
        this.quill.setContents(quote, Quill.sources.SILENT);
        this.quill.setSelection(this.quill.getLength(), 0, Quill.sources.SILENT);
    };

    onSelectionChange = range => {
        const toolbarElement = this.toolbar.container;

        if (range) {
            if (range.length === 0) {
                this.hideInactiveToolbar();
            } else {
                const { top, left } = this.quill.getBounds(range);
                const shift = 49;
                toolbarElement.style.visibility = 'visible';
                toolbarElement.style.position = 'absolute';
                toolbarElement.style.top = `${top - shift}px`; // TODO need additional calculations for edge cases
                toolbarElement.style.left = `${left}px`;
            }
        } else {
            this.hideInactiveToolbar();
        }
    };

    hideInactiveToolbar() {
        const element = this.toolbar?.container;
        const isToolbarFocused =
            element &&
            (element.contains(document.activeElement) ||
                element === document.activeElement);
        if (!isToolbarFocused) {
            element.style.visibility = 'hidden';
        }
    }

    render() {
        return (
            <div id={this.props.editorId}>
                <div
                    role="application"
                    ref={this.editor}
                // className={styles.quill}
                />
            </div>
        )
    }
}

export default QuillEditor;
