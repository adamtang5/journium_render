import { createRef } from "react";
import BubbleQuillEditor from "./BubbleQuillEditor";
import SnowQuillEditor from "./SnowQuillEditor";

const QuillEditor = ({
    elementId,
    snowToolbarId,
    bubbleToolbarId,
    placeholder,
    setData,
    initialHtml
}) => {
    const visibleQuillRef = createRef();

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

    const handleImageUpload = () => {
        const hiddenImageInput = document.getElementById('bubble-hidden-image');
        hiddenImageInput.click();
    };

    const handleImageUrl = () => {
        const hiddenVideoButton = document.getElementById('bubble-hidden-link');
        hiddenVideoButton.click();
    };

    const handleVideo = () => {
        const hiddenVideoButton = document.getElementById('bubble-hidden-video');
        hiddenVideoButton.click();
    };

    return (
        <div id={elementId}>
            <SnowQuillEditor
                toolbarId={snowToolbarId}
                undoChange={undoChange}
                redoChange={redoChange}
                handleImageUpload={handleImageUpload}
                handleImageUrl={handleImageUrl}
                handleVideo={handleVideo}
            />
            <BubbleQuillEditor
                toolbarId={bubbleToolbarId}
                visibleQuillRef={visibleQuillRef}
                placeholder={placeholder}
                onEditorChange={onEditorChange}
                initialHtml={initialHtml}
            />
        </div>
    );
};

export default QuillEditor;
