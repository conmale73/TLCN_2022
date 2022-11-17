import styles from './payment.module.scss';
import { useState } from 'react';
import Divider from '../../../components/Divider';
const Payment = (total) => {
    return (
        <div className={styles.payment}>
            <h1>Order Summary</h1>
            <div className={styles.subtotal}>
                Item Sub-total

                <span>${total.total}</span>
            </div>
            <Divider/>
            <div className={styles.total}>
                Total
                <span>${total.total}</span>
            </div>
            <Divider/>
            <button className={styles.button}>Proceed to purchase</button>
        </div>
    )
}
export default Payment;