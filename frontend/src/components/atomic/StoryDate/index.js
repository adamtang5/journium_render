const StoryDate = ({ story }) => {
    return (
        <div className="date">{new Date(story.createdAt).toString().slice(4, 10)}</div>
    )
};

export default StoryDate;
