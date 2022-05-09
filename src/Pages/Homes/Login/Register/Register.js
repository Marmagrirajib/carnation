import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import image from "../../../../Images/man2.jpg";
// import Social from "../Social/Social";

const Register = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true,
    });

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate("/login");
    };

    if (user) {
        navigate("/");
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col lg-6">
                    <img className="img-fluid image" src={image} alt="" />
                </div>
                <div className="col-lg-6">
                    <div className="form">
                        <form onSubmit={handleRegister}>
                            <h4 className="text-center mb-3">Create an account</h4>
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
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">
                                    Check me out
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary button">
                                Register
                            </button>
                        </form>
                        <p className="text-center mt-3">
                            Already have an account?{" "}
                            <Link
                                onClick={navigateLogin}
                                className="pe-auto text-decoration-none text-danger"
                                to="/login"
                            >
                                Please Login
                            </Link>
                        </p>
                        {/* <Social></Social> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
