import styles from "./intro.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
const Intro = ({ title, content, links }) => {
    const [Links, setLinks] = useState(links);
    return (
        <div className={styles.intro}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.links}>
                {Links.map((link, index) => {
                    return (
                        <Link to={"/search?key=" + link.key} key={index} className={styles.link}>
                            {link.content}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
export default Intro;
