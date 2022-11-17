import styles from "./productDetail.module.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Left from "./Left";
import Right from "./Right";
import { productService } from "../../service";
const ProductDetail = () => {
    const {productSlug} = useParams();
    document.title = "Product Detail";

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/api/${productSlug}`);
            console.log("response:", response);
            
            if (!response.ok) {
                console.log("error:", response);
                return;
              }
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
        
    }, []);
    getProduct();
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
