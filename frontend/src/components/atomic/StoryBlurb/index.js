const StoryBlurb = ({ story, cutoff }) => {
    cutoff = cutoff || 240;
    let blurb = story.content.slice(0, cutoff + 1);
    if (blurb.length > cutoff) {
        // credits to Sam Kramer for his contribution with the RegExp
        blurb = blurb.replace(/\s\S*$/, "") + " ...";
    }

    return (
        <div className="story-blurb">
            <p>{blurb}</p>
        </div>
    )
};

export default StoryBlurb;
