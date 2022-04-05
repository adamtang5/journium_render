import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import * as roleActions from '../../store/role';
import { Redirect } from 'react-router-dom';
import EmailError from './Errors/EmailError';
import PasswordError from './Errors/PasswordError';
import ConfirmPasswordError from './Errors/ConfirmPasswordError';
import DisplayNameError from './Errors/DisplayNameError';
import AvatarUrlError from './Errors/AvatarUrlError';
import '../../context/AuthForm.css';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const roles = useSelector(state => state.role.roles);

    // slice-of-state variables for controlled inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [roleId, setRoleId] = useState();

    // slice of state for final validation when clicking submit button
    const [errors, setErrors] = useState([]);

    // onBlur error pre-validation
    const [emailTooShort, setEmailTooShort] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordTooShort, setPasswordTooShort] = useState(false);
    const [confirmPasswordTooShort, setConfirmPasswordTooShort] = useState(false);
    const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);
    const [displayNameTooShort, setDisplayNameTooShort] = useState(false);
    const [avatarUrlInvalid, setAvatarUrlInvalid] = useState(false);
    const [roleIdInvalid, setRoleIdInvalid] = useState(false);

    // signup form flow control
    const [showPart1, setShowPart1] = useState(true);
    const [part1SubmitDisabled, setPart1SumbitDisabled] = useState(true);
    const [showPart1Summary, setShowPart1Summary] = useState(false);
    const [showPart2, setShowPart2] = useState(false);
    const [part2SubmitDisabled, setPart2SubmitDisabled] = useState(true);
    const [showPart2Summary, setShowPart2Summary] = useState(false);
    const [showPart3, setShowPart3] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    // submit button is disabled until basic validation is done
    useEffect(() => {
        if (!emailInvalid) {
            setPart1SumbitDisabled(!(
                email.length >= 5 &&
                password.length >= 6 &&
                confirmPassword.length >= 6 &&
                password === confirmPassword
            ));
        } else {
            setPart1SumbitDisabled(true);
        }
    }, [email, password, confirmPassword, emailInvalid]);

    useEffect(() => {
        if (!avatarUrlInvalid) {
            setPart2SubmitDisabled(!(
                displayName.length >= 4
            ))
        } else {
            setPart2SubmitDisabled(true);
        }
    }, [displayName, avatarUrl, avatarUrlInvalid]);

    useEffect(() => {
        setSubmitDisabled(!(
            email.length >= 5 &&
            password.length >= 6 &&
            confirmPassword.length >= 6 &&
            displayName.length >= 4 &&
            roleId));
    }, [email, password, confirmPassword, displayName, roleId]);

    // logged in users are redirected
    if (sessionUser) return (
        <Redirect to="/" />
    )

    // onBlur pre-validations
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

    const displayNameChange = e => {
        setErrors([]);
        setDisplayName(e.target.value);
    };

    const avatarUrlChange = e => {
        setErrors([]);
        setAvatarUrl(e.target.value);
    };

    const roleIdChange = e => {
        setErrors([]);
        setRoleId(e.target.value);
    };

    // basic pre-validation onBlur events
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

    const validateDisplayName = e => {
        setDisplayNameTooShort(displayName.length < 4);
    };

    const validateAvatarUrl = e => {
        const urlRe = new RegExp("((http|https)://)(www.)?" +
            "[a-zA-Z0-9@:%._\\+~# ?&//=]{2,256}\\.[a-z]" +
            "{2,6}\\b([-a-zA-Z0-9@:%._\\+~# ?&//=]*)")
        setAvatarUrlInvalid(!urlRe.test(avatarUrl));
    }

    const validateRoleId = e => {
        setRoleIdInvalid(!roleId);
    };

    // button onClick handlers
    const handlePart1Submit = e => {
        e.preventDefault();
        setErrors([]);
        setShowPart1(false);
        setShowPart1Summary(true);
        setShowPart2(true);
    };

    const handlePart2Submit = e => {
        e.preventDefault();
        setErrors([]);
        setShowPart2(false);
        setShowPart2Summary(true);
        setShowPart3(true);
        dispatch(roleActions.fetchRoles());
        console.log(roles);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.signup({
            email,
            password,
            displayName,
            avatarUrl,
            roleId,
        }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    return (
        <div id="signup-form" className="page-wrapper centered bordered rounded-corners">
            <h2 className="centered">Join Journium.</h2>
            <form
                className="auth-form stacked-form"
                onSubmit={handleSubmit}
            >
                <div
                    id="signup-pt-1"
                    className={`auth-form-group${showPart1 ? '' : ' hidden'}`}
                >
                    <label className="auth-form-element">
                        <input
                            type="email"
                            value={email}
                            onChange={emailChange}
                            onBlur={validateEmail}
                            placeholder="Email"
                            required
                        />
                        <EmailError
                            emailTooShort={emailTooShort}
                            emailInvalid={emailInvalid}
                        />
                    </label>
                    <label className="auth-form-element">
                        <input
                            type="password"
                            value={password}
                            onChange={passwordChange}
                            onBlur={validatePassword}
                            placeholder="Password"
                            required
                        />
                        <PasswordError visible={passwordTooShort} />
                    </label>
                    <label className="auth-form-element">
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={confirmPasswordChange}
                            onBlur={validateConfirmPassword}
                            placeholder="Confirm Password"
                            required
                        />
                        <ConfirmPasswordError
                            passwordTooShort={passwordTooShort}
                            confirmPasswordTooShort={confirmPasswordTooShort}
                            passwordsDoNotMatch={passwordsDoNotMatch}
                        />
                    </label>
                    <button
                        className={`button-submit${part1SubmitDisabled ? ' disabled' : ''}`}
                        disabled={part1SubmitDisabled}
                        onClick={handlePart1Submit}
                    >
                        Next
                    </button>
                </div>
                <div
                    id="signup-pt-1-summary"
                    className={`auth-form-group${showPart1Summary ? '' : ' hidden'}`}
                >
                    <p className="summary-text">Email: {email}</p>
                </div>

                <div
                    id="signup-pt-2"
                    className={`auth-form-group${showPart2 ? '' : ' hidden'}`}
                >
                    <label className="auth-form-element">
                        <input
                            type="text"
                            value={displayName}
                            onChange={displayNameChange}
                            onBlur={validateDisplayName}
                            placeholder="Display Name"
                        />
                        <DisplayNameError displayNameTooShort={displayNameTooShort} />
                    </label>
                    <label className="auth-form-element">
                        <input
                            type="text"
                            value={avatarUrl}
                            onChange={avatarUrlChange}
                            onBlur={validateAvatarUrl}
                            placeholder="Avatar URL"
                        />
                        <AvatarUrlError avatarUrlInvalid={avatarUrlInvalid} />
                    </label>
                    <button
                        className={`button-submit${part2SubmitDisabled ? ' disabled' : ''}`}
                        disabled={part2SubmitDisabled}
                        onClick={handlePart2Submit}
                    >
                        Next
                    </button>
                </div>
                <div
                    id="signup-pt-2-summary"
                    className={`flex-row auth-form-group${showPart2Summary ? '' : ' hidden'}`}
                >
                    <img src={avatarUrl} width="30px" height="30px" alt={displayName} />
                    <p className="summary-text">Writer Name: {displayName}</p>
                </div>

                <div
                    id="signup-pt-3"
                    className={`auth-form-group${showPart3 ? '' : ' hidden'}`}
                >
                    <div className="auth-form-element">
                        <p>Who do you identify with?</p>
                        {roles.map(role => (
                            <label className="radio-label" key={role.id}>
                                <input
                                    className="radio"
                                    type="radio"
                                    key={role.id}
                                    value={role.id}
                                    checked={+roleId === role.id}
                                    onChange={roleIdChange}
                                />
                                <span className="radio-text">{role.name}</span>
                            </label>
                        ))}
                    </div>
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
                </div>
            </form>
        </div>
    )
};

export default SignupFormPage;
