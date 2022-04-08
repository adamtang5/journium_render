const StoryVideo = ({ videoUrl }) => {
    if (!videoUrl) return null;

    let youtubeVideoId;
    if (videoUrl.includes('youtu.be/')) {
        youtubeVideoId = videoUrl.split('youtu.be/')[1].split('?')[0];
    } else if (videoUrl.includes('youtube.com/watch?v=')) {
        youtubeVideoId = videoUrl.split('youtube.com/watch?v=')[1].split('?')[0];
    }

    return (
        <iframe width="965" height="543" src={`https://www.youtube.com/embed/${youtubeVideoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    )
};

export default StoryVideo;
