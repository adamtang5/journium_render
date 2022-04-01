export default function EmailError({ emailTooShort, emailInvalid }) {
    if (!emailTooShort && !emailInvalid) return null;
    if (emailTooShort) return <p className="error-text">Email must be at least 5 characters</p>;
    if (!emailTooShort && emailInvalid) return <p className="error-text">Please provide a valid email</p>;
};
