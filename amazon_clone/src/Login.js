import React, { useState } from "react"
import "./Login.css"
import amazon_logo from "./img/amazon_logo_black.png"
import { Link, useHistory } from "react-router-dom"
import { auth } from "./firebase"

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(error => alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/")
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src={amazon_logo}
                />
            </Link>
            <div className="login__container">
                <h1 className="login__title">
                    Sign in
                </h1>
                <form className="login__form">
                    <h5 className="login__formPrompt">E-mail</h5>
                    <input
                        className="login__formInput"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5 className="login__formPrompt">Password</h5>
                    <input
                        className="login__formInput"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        className="login__signInButton"
                        onClick={signIn}
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>

                <p className="login__text">
                    By signing-in you agree to Amazon Clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
                </p>
                <button
                    className="login__registerButton"
                    onClick={register}
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
