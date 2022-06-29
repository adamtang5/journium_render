import { createRef, useState, useEffect } from "react";
import BubbleQuillEditor from "./BubbleQuillEditor";
import SnowQuillEditor from "./SnowQuillEditor";

const QuillEditor = ({ elementId, snowToolbarId, bubbleToolbarId, placeholder, setData, initialHtml }) => {
    const hiddenQuillRef = createRef();
    const visibleQuillRef = createRef();
    // const hiddenRedoRef = createRef();
    // const hiddenUndoRef = createRef();

    const onEditorChange = value => {
        setData(value);
    };

    const undoChange = () => {
        const hiddenUndoButton = document.getElementById('bubble-hidden-undo');
        hiddenUndoButton.click();
    };

    const redoChange = () => {
        const hiddenRedoButton = document.getElementById('bubble-hidden-redo');
        hiddenRedoButton.click();
    };

    const handleImage = () => {
        const hiddenImageButton = document.getElementById('bubble-hidden-image');
        console.log(hiddenImageButton);
        hiddenImageButton.click();
    };

    const handleVideo = () => {
        const hiddenVideoButton = document.getElementById('bubble-hidden-video');
        console.log(hiddenVideoButton);
        hiddenVideoButton.click();
    };

    return (
        <div id={elementId}>
            <SnowQuillEditor
                toolbarId={snowToolbarId}
                undoChange={undoChange}
                redoChange={redoChange}
                handleImage={handleImage}
                handleVideo={handleVideo}
            />
            <BubbleQuillEditor
                toolbarId={bubbleToolbarId}
                visibleQuillRef={visibleQuillRef}
                // hiddenRedoRef={hiddenRedoRef}
                // hiddenUndoRef={hiddenUndoRef}
                placeholder={placeholder}
                onEditorChange={onEditorChange}
                initialHtml={initialHtml}
            />
        </div>
    );
};

export default QuillEditor;
