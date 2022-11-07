import styles from "./register.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Divider from "../../../components/Divider";
import AlertMessage from "../../../components/AlertMessage";
const Register = (title) => {
    document.title = title.title;

    const [registerForm, setRegisterForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        name: "",
        address: "",
        permission: 1,
    });

    const [alert, setAlert] = useState(null);

    const { username, password, confirmPassword, name, address, permission } =
        registerForm;

    const onChangeRegisterForm = (event) =>
        setRegisterForm({
            ...registerForm,
            [event.target.name]: event.target.value,
        });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(registerForm);
        if (password !== confirmPassword) {
            setAlert({ type: "danger", message: "Passwords and Confirm do not match" });
            setTimeout(() => setAlert(null), 5000);
            return;
        }
    };

    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h1>Create Account</h1>
                    <AlertMessage info={alert} bsPrefix="alertMessage"/>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        name="username"
                        onChange={onChangeRegisterForm}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        name="password"
                        onChange={onChangeRegisterForm}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        name="confirmPassword"
                        onChange={onChangeRegisterForm}
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        name="name"
                        onChange={onChangeRegisterForm}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        name="address"
                        onChange={onChangeRegisterForm}
                    />

                    <button className={styles.btn}>Register</button>
                    <Divider />
                </form>
                <p>Already have an account?</p>
                <Link to="/login">
                    <button className={styles.btnLogin}>Sign In</button>
                </Link>
            </div>
        </div>
    );
};
export default Register;
