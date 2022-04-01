export default function PasswordError({ visible }) {
    if (!visible) return null;
    return <p className="error-text">Password must be at least 6 characters</p>
};
