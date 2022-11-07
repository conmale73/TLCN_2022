import styles from './new.module.scss';
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
    

]
const New = () => {

    return (
        <div className={styles.new}>
            <div className={styles.title}>New Products</div>
            <ListProduct products={Products} isSlide={false}></ListProduct>
        </div>
    );
}
export default New;