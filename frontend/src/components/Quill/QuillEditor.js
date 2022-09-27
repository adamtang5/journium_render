import { createRef } from "react";
import BubbleQuillEditor from "./BubbleQuillEditor";
import SnowQuillEditor from "./SnowQuillEditor";

const QuillEditor = ({
    elementId,
    snowToolbarId,
    bubbleToolbarId,
    placeholder,
    setData,
    handleInsertImage,
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

    const handleImage = () => {
        const hiddenImageInput = document.getElementById('bubble-hidden-image');
        hiddenImageInput.click();
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
                handleImage={handleImage}
                handleVideo={handleVideo}
            />
            <BubbleQuillEditor
                toolbarId={bubbleToolbarId}
                visibleQuillRef={visibleQuillRef}
                placeholder={placeholder}
                onEditorChange={onEditorChange}
                handleInsertImage={handleInsertImage}
                initialHtml={initialHtml}
            />
        </div>
    );
};

export default QuillEditor;
