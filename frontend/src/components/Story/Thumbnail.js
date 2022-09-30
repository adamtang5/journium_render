import { firstImage } from "../utils/JSSoup";

const Thumbnail = ({ story }) => {
    const imageInfo = firstImage(story.content);
    return (
        <div className="thumbnail">
            {/* {(story.imageUrl) ? (
                <img src={story.imageUrl} alt={story.title} />
            ) : (
                <img src="/images/no-image.jpg" alt={story.title} />
            )} */}
            {(imageInfo.length) ? (
                <img src={imageInfo[0]} alt={imageInfo[1]} />
            ) : (
                <img src="/images/no-image.jpg" alt={story.title} />
            )}
        </div>
    )
};

export default Thumbnail;
