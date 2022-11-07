import styles from "./productDetail.module.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Left from "./Left";
import Right from "./Right";
const ProductDetail = () => {
    document.title = "Product Detail";

    return (
        <div className={styles.productDetail}>
            <div className={styles.left}>
                <Left />
            </div>
            <div className={styles.right}>
                <Right />
            </div>
        </div>
    );
};
export default ProductDetail;
