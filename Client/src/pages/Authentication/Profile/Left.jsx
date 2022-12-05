import styles from './profile.module.scss';
import { Link } from 'react-router-dom';
const Options = [
    {
        label: "Account Detail",
        url: "/profile/account-detail"
    },
    {
        label: "Your Orders",
        url: "/profile/orders"
    }
]
const Option = ({label, url}) => {
    return (
        <div className={styles.option}>
            <Link to={url} className={styles.text}>
                {label}
            </Link>
        </div>
    )
}
const Left = () => {
    return (
        <div className={styles.left}>
            <div className={styles.options}>
                {Options.map((option, index) => {
                    return (
                        <Option key={index} label={option.label} url={option.url}/>
                    )
                })}
            </div>
        </div>
    );
}
export default Left;