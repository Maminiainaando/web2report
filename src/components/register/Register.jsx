import "./register.css";
import {
    CreateBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginleft">
                    <h3 className="loginLogo">Facebak</h3>
                    <span className="loginDesc">
                        Connect to the facebok
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" type="text" className="loginInput" />
                        <input placeholder="Email" type="email" className="loginInput" />
                        <input placeholder="Password" type="password" className="loginInput" />
                        <input placeholder="Password Again" type="password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
