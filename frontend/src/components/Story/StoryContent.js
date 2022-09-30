const StoryContent = ({ story }) => {
    return (
        <div
            className="story-content"
            dangerouslySetInnerHTML={{ __html: story?.content }}
        />
        // <p className="story-content">
        //     {story.content}
        // </p>
    )
};

export default StoryContent;
