import styles from './sale.module.scss';
import ProductCard from '../../../components/ProductCard';
import ListProduct from '../../../components/ListProduct';
const Products = [
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,
    ProductCard,

]
const Sale = () => {

    return (
        <div className={styles.sale}>
            <div className={styles.title}>Sale Products</div>
            <ListProduct products={Products} isSlide={false}></ListProduct>
        </div>
    );
}
export default Sale;