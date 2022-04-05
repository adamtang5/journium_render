export default function EmailError({ visible }) {
    if (!visible) return null;
    return <p className="error-text">Email must be at least 4 characters</p>
};
