import React from "react";
import "./app.css";

export function App({ title}: {title: string}) {
    return ( 
        <div className="container">
            <button className="register">Register</button>
            <section>
                <div>
                    <h1>Welcome!</h1>
                    <p className="subtitle">Enter your email and password to log in</p>
                    <div className="grey-box">
                        <p>Email</p>
                        <input type="email" placeholder="Enter your email" />
                        <p>Password</p>
                        <input type="password" placeholder="Enter your password" />
                        <div className="sign-in">
                            <button className="sign">Sign in</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};