import "./login.css"
export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginleft">
                    <h3 className="loginLogo">Facebak</h3>
                    <span className="loginDesc">
                        Connect to the facebak
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="email" type="text" className="loginInput" />
                        <input placeholder="password" type="password" className="loginInput" />
                        <button className="loginButton">Log in</button>
                        <span className="loginForgot">Forgot password</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
