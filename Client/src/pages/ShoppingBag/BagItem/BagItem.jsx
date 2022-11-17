import styles from "./bagItem.module.scss";
import Divider from "../../../components/Divider";
import { useState } from "react";
import { Modal, Button } from "flowbite-react";

const BagItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => {
        setQuantity(e.target.value);
    };
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className={styles.bagItem}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={item.image} alt={item.name} />
                </div>

                <div className={styles.bagItemInfo}>
                    <div className={styles.designer}>{item.designer}</div>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.price}>${item.price}</div>
                    <div className={styles.size}>Size: {item.size[0]}</div>
                    <div className={styles.quantity}>
                        <div className={styles.quantityTitle}>Quantity:</div>
                        <div className={styles.quantityButtons}>
                            <button
                                className={styles.quantityButton}
                                onClick={handleDecrease}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                className={styles.quantityInput}
                                value={quantity}
                                onChange={(e) => handleChange(e)}
                            ></input>
                            <button
                                className={styles.quantityButton}
                                onClick={handleIncrease}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    );
};
export default BagItem;
