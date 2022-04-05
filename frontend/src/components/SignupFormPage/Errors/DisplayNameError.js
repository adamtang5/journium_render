export default function DisplayNameError({ visible }) {
    if (!visible) return null;
    return <p className="error-text">Display Name must be at least 4 characters</p>
};
