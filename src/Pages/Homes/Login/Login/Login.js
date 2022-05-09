import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../../../Images/man.jpg";

import "./Login.css";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
// import Social from "../Social/Social";

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        console.log(email, password);
    };

    const navigateRegister = (event) => {
        navigate("/register");
    };
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert("Sent email");
    };

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col lg-6 d-flex">
                    <img className="img-fluid image" src={image} alt="" />

                </div>
                <div className="col-lg-6">
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <h4 className="text-center mb-4">Please Login</h4>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <p>{error?.message}</p>

                            <button type="submit" className="btn btn-primary button">
                                Login
                            </button>
                        </form>
                        <p className="text-center mt-3">
                            Are you new this website?{" "}
                            <Link
                                onClick={navigateRegister}
                                className="pe-auto text-decoration-none text-danger"
                                to="/register"
                            >
                                Please Register
                            </Link>
                        </p>
                        <p className="text-center">
                            Forget Password?{" "}
                            <Link
                                onClick={resetPassword}
                                className="pe-auto text-decoration-none text-primary"
                                to="/register"
                            >
                                Reset Password
                            </Link>
                        </p>
                        {/* <Social></Social> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
