import styles from "./productCard.module.scss";

const ProductCard = (props) => {
    return (
        <div className={styles.productCard}>
            <div className={styles.productImage}>
                <img src="https://cache.mrporter.com/variants/images/1647597286496534/in/w358_q60.jpg"></img>
            </div>
            <div className={styles.productTitle}>Distressed Denim Jacket</div>
            <div className={styles.productDescription}>
                RRL's denim jacket nods to the Western aesthetics that inspire
                the label. Made from denim in a rusty brown wash, it's cut for a
                regular fit and has classic patch pockets on the front.
            </div>
            <div className={styles.productPrice}>$475</div>
            <div className={styles.productButton}>Buy now</div>
        </div>
    );
};
export default ProductCard;
