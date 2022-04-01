import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import UsernameError from './Errors/UsernameError';
import EmailError from './Errors/EmailError';
import PasswordError from './Errors/PasswordError';
import ConfirmPasswordError from './Errors/ConfirmPasswordError';
import './SignupForm.css';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const [usernameTooShort, setUsernameTooShort] = useState(false);
    const [emailTooShort, setEmailTooShort] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordTooShort, setPasswordTooShort] = useState(false);
    const [confirmPasswordTooShort, setConfirmPasswordTooShort] = useState(false);
    const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() => {
        setSubmitDisabled(!(
            username.length >= 4 &&
            email.length >= 5 &&
            password.length >= 6 &&
            confirmPassword.length >= 6));
    }, [username, email, password, confirmPassword]);

    if (sessionUser) return (
        <Redirect to="/" />
    )

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.signup({
            username,
            email,
            password,
        }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    const usernameChange = e => {
        setErrors([]);
        setUsername(e.target.value);
    };

    const emailChange = e => {
        setErrors([]);
        setEmail(e.target.value);
    };

    const passwordChange = e => {
        setErrors([]);
        setPassword(e.target.value);
    };

    const confirmPasswordChange = e => {
        setErrors([]);
        setConfirmPassword(e.target.value);
    };

    const validateUsername = e => {
        setUsernameTooShort(username.length < 4);
    };

    const validateEmail = e => {
        setEmailTooShort(email.length < 5);

        const emailRe = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        setEmailInvalid(!emailRe.test(email));
    };

    const validatePassword = e => {
        setPasswordTooShort(password.length < 6);
    }

    const validateConfirmPassword = e => {
        setConfirmPasswordTooShort(confirmPassword.length < 6);
        setPasswordsDoNotMatch(password !== confirmPassword);
    }

    return (
        <div id="signup-form" className="page-wrapper centered bordered rounded-corners">
            <form
                className="auth-form stacked-form"
                onSubmit={handleSubmit}>
                <label>
                    <span className="label-text">Username</span>
                    <input
                        type="text"
                        value={username}
                        onChange={usernameChange}
                        onBlur={validateUsername}
                        required
                    />
                    <UsernameError visible={usernameTooShort} />
                </label>
                <label>
                    <span className="label-text">Email</span>
                    <input
                        type="email"
                        value={email}
                        onChange={emailChange}
                        onBlur={validateEmail}
                        required
                    />
                    <EmailError
                        emailTooShort={emailTooShort}
                        emailInvalid={emailInvalid}
                    />
                </label>
                <label>
                    <span className="label-text">Password</span>
                    <input
                        type="password"
                        value={password}
                        onChange={passwordChange}
                        onBlur={validatePassword}
                        required
                    />
                    <PasswordError visible={passwordTooShort} />
                </label>
                <label>
                    <span className="label-text">Confirm Password</span>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={confirmPasswordChange}
                        onBlur={validateConfirmPassword}
                        required
                    />
                    <ConfirmPasswordError
                        passwordTooShort={passwordTooShort}
                        confirmPasswordTooShort={confirmPasswordTooShort}
                        passwordsDoNotMatch={passwordsDoNotMatch}
                    />
                </label>
                {errors.length > 0 && (
                    <ul className='errors'>
                        {errors.map((error, i) => <li key={i} className="error-text">{error}</li>)}
                    </ul>
                )}
                <button
                    type="submit"
                    className={`button-submit${submitDisabled ? ' disabled' : ''}`}
                    disabled={submitDisabled}
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
};

export default SignupFormPage;