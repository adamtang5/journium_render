export default function CredentialError({ visible }) {
    if (!visible) return null;
    return <p className="error-text">Username or email must be at least 4 characters</p>
};
