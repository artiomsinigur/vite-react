import React, { useState } from "react";
// import { Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";

const Authentication = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [{response, isLoading, error}, doFeatch] = useFetch('/users/login', email)

    console.log('Authentication', response, isLoading, error)

    if (isLoading) {
        <h2>Is loading...</h2>
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('data', email, password);
        setIsSubmitting(true)
    }
    return (
        <div className="auth-page" style={{ textAlign: "center" }}>
            <h2 className="text">Login</h2>
            <span className="text">
                {/* <Link to='/register'>Need an account?</Link> */}
            </span>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                </fieldset>
                <button
                    disabled={isLoading}
                    type="submit"
                    className="btn">Sign in
                </button>

            </form>

        </div>
    )
}
export default Authentication