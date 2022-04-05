export default function AvatarUrlError({ visible }) {
    if (!visible) return null;
    return <p className="error-text">Please enter a valid URL</p>
};
