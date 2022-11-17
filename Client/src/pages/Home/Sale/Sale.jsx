import styles from './sale.module.scss';
import ProductCard from '../../../components/ProductCard';
import ListProduct from '../../../components/ListProduct';
import { useState, useEffect } from "react";
const Sale = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://json.conmale73.repl.co/products`)
            .then((res) => res.json())
            .then((datas) => {
                setProducts(datas);
            });
    }, []);

    return (
        <div className={styles.sale}>
            <div className={styles.title}>Sale Products</div>
            <ListProduct products={products} isSlide={false}></ListProduct>
        </div>
    );
}
export default Sale;