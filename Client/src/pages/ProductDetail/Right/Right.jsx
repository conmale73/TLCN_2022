import styles from "./right.module.scss";
import SizePicker from "../../../components/SizePicker";
import { React ,useState, useEffect } from "react";
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';


const Right = (props) => {
    const initProductDetail = useSelector((state) => state.products.productDetail.data);
    const { name, designer, price, description, quantity, size } = initProductDetail;

    const handleChange = (selectedOption) => {
        console.log(`Option selected:`, selectedOption);
    }
    return (
        <div className={styles.right}>
            <div className={styles.container}>
                
                <div className={styles.designer}>{designer}</div>
                <div className={styles.name}>{name}</div>
                <div className={styles.quantity}>
                    Quantity: {quantity}
                </div>
                <div className={styles.price}>${price}</div>
                {size ? (
                    <div className={styles.size} >
                    Size
                    <Select options={size} onChange={handleChange} className="m-6"/>
                </div>
                ) : (
                    <></>
                )}
                
                <div className={styles.description}>
                    Description:
                    {description}
                </div>
                
                <div className={styles.button}>Add to Bag</div>
            </div>
        </div>
    );
};
export default Right;
