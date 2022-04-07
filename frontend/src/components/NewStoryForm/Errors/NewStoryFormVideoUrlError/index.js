export default function NewStoryFormVideoUrlError({ videoUrlInvalid }) {
    if (!videoUrlInvalid) return null;
    return <p className="error-text">Video URL is not a valid URL.</p>
};
