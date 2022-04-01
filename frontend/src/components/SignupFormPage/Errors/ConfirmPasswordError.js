export default function ConfirmPasswordError({ passwordTooShort, confirmPasswordTooShort, passwordsDoNotMatch }) {
    if (passwordTooShort) return null;

    if (!passwordTooShort && passwordsDoNotMatch) return <p className="error-text">Passwords must match</p>;

    if (!passwordTooShort && !passwordsDoNotMatch && confirmPasswordTooShort) return <p className="error-text">Please provide a password</p>

    if (!passwordTooShort && !passwordsDoNotMatch && !confirmPasswordTooShort) return null;
};
