export default function NewStoryFormImageUrlError({ imageUrlInvalid }) {
    if (!imageUrlInvalid) return null;
    return <p className="error-text">Image URL is not a valid URL.</p>
};
