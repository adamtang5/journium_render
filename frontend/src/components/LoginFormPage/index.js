import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import CredentialError from './Errors/CredentialError';
import PasswordError from './Errors/PasswordError';
import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const [credentialInvalid, setCredentialInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() => {
        setSubmitDisabled(!(credential.length >= 4 && password.length >= 6));
    }, [credential, password]);

    if (sessionUser) return (
        <Redirect to="/" />
    )

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    const handleDemoLogin = e => {
        e.preventDefault();
        return dispatch(sessionActions.demoLogin())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    const credentialChange = e => {
        setErrors([]);
        setCredential(e.target.value);
    };

    const passwordChange = e => {
        setErrors([]);
        setPassword(e.target.value);
    };

    const validateCredential = e => {
        setCredentialInvalid(credential.length < 4);
    };

    const validatePassword = e => {
        setPasswordInvalid(password.length < 6);
    }

    return (
        <div id="login-form" className="page-wrapper centered bordered rounded-corners">
            <h2 className="centered">Welcome Back.</h2>
            <form
                className="auth-form stacked-form"
                onSubmit={handleSubmit}>
                <label>
                    <span className="label-text">Username or Email</span>
                    <input
                        type="text"
                        value={credential}
                        onChange={credentialChange}
                        onBlur={validateCredential}
                        required
                    />
                    <CredentialError visible={credentialInvalid} />
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
                    <PasswordError visible={passwordInvalid} />
                </label>
                {errors.length > 0 && (
                    <ul className='errors'>
                        {errors.map((error, i) => <li key={i} className="error-text">{error}</li>)}
                    </ul>
                )}
                <div className="flex-row gap-10px">
                    <button
                        type="submit"
                        className={`button-submit${submitDisabled ? ' disabled' : ''}`}
                        disabled={submitDisabled}
                    >
                        Log In
                    </button>
                    <button
                        className="button-demo-user"
                        onClick={handleDemoLogin}>
                        Demo User
                    </button>
                </div>
            </form>
        </div>
    )
};

export default LoginFormPage;
