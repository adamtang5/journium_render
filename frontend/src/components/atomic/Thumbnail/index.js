const Thumbnail = ({ story }) => {
    return (
        <div className="thumbnail">
            {(story.imageUrl) ? (
                <img src={story.imageUrl} alt={story.title} />
            ) : (
                <img src="/images/no-image.jpg" alt={story.title} />
            )}
        </div>
    )
};

export default Thumbnail;
