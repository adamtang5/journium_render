export default function UsernameError({ visible }) {
    if (!visible) return null;
    return <p className="error-text">Username must be at least 4 characters</p>
};
