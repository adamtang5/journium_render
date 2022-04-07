export default function EditStoryFormImageUrlError({ imageUrlInvalid }) {
    if (!imageUrlInvalid) return null;
    return <p className="error-text">Image URL may not be a valid URL.</p>
};
