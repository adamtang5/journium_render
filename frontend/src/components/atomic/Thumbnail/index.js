const Thumbnail = ({ story }) => {
    return (
        <div className="thumbnail">
            <img src={story.imageUrl} alt={story.title} />
        </div>
    )
};

export default Thumbnail;
