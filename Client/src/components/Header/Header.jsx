import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import styles from './header.module.scss';
import { Logo } from '../Icons';
import { Search, Cart, User } from '../Icons';
function Header() {
    const [user, setUser] = useState(null);

    const handleOrderClick = () => {
        // const phoneNumber = JSON.parse(localStorage.getItem('user')).phoneNumber.toString();
        // const userPhoneNumber = phoneNumber.replace('+84', '0');
        // getHistoryOrders(dispatch, userPhoneNumber);
    }
    return (
        <header className={styles.heading}>
            <div className={styles.top}>
                <div className={styles.wrap}>
                    <Link to="/">
                        <div className={styles.logo}>
                            <i>
                                <Logo />
                            </i>
                        </div>
                    </Link>
                    
                </div>
                <span className={styles.tools}>
                        <Link to="/search" className={styles.search}>
                            <i>
                                <Search />
                            </i>
                        </Link>
                        <Link to="/cart" className={styles.cart}>
                            <i>
                                <Cart />
                            </i>
                        </Link>
                        <Link to="/login" className={styles.login}>
                            <i style={{display: user? "none" : ""}}>
                                <User/>
                            </i>
                        </Link>
                    </span>
            </div>
            <div className={styles.bottom}>
                <HeaderNav />
            </div>
        </header>
    );
}

export default Header;
