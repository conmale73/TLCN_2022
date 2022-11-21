import styles from "./login.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Divider from "../../../components/Divider";
import AuthService from "../../../service/user.service";

const Login = (title) => {
    document.title = title.title;

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const [alert, setAlert] = useState(false);

    const { username, password } = loginForm;
    const onChangeLoginForm = (event) =>
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(loginForm);
        try {
            const res = await AuthService.login(email, password);

            if (res.statusCode) {
                setTimeout(() => {
                    localStorage.setItem("token", res.token);
                }, 1500);
            }
            else {
                setAlert(true)
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={styles.login}>
            <div className={styles.container}>
                {alert && (
                        <p className={styles.alert}>Đăng nhập thất bại</p>
                    )}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h1>Sign In</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        name="username"
                        onChange={onChangeLoginForm}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        name="password"
                        onChange={onChangeLoginForm}
                    />

                    <button className={styles.btn}>Login</button>
                    <Divider />
                </form>
                <p>Don't have an account?</p>
                <Link to="/register">
                    <button className={styles.btnRegister}>
                        Create Account
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default Login;
