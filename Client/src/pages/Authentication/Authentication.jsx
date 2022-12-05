import styles from "./authentication.module.scss";
import Login from "./Login";
import Profile from "./Profile";
import { useDispatch } from "react-redux";
import Welcome from "./Welcome";

const Authentication = (title) => {
    document.title = title.title;

    let user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className={styles.authentication}>
            {/* <div className={styles.welcome}>
                <Welcome />
            </div> */}
            {user ? <Profile /> : <Login />}
        </div>
    );
};
export default Authentication;
