const StoryImage = ({ imageUrl, alt }) => {
    if (!imageUrl) return null;
    return (
        <div className="story-image">
            <img src={imageUrl} alt={alt} />
        </div>
    )
};

export default StoryImage;
