import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import "./Social.css";

const Social = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        navigate("/");
    }

    return (
        <div className="social">
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-2 px-2">or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn button text-light w-100"
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Social;
