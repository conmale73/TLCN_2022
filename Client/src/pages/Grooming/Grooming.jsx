import styles from "./grooming.module.scss";
import Intro from "../../components/Intro";
import Divider from "../../components/Divider";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import ListProduct from "../../components/ListProduct";
const IntroContent = {
    title: "Grooming",
    content:
        "The modern man's grooming regime extends beyond shampoo and soap. Look your best every day with the finest skincare, haircare and men's fragrance from the world's most exclusive brands.",
    links: [
        {
            content: "Skincare",
            key: "Skincare",
        },

        {
            content: "Haircare",
            key: "Haircare",
        },
        {
            content: "Fragance",
            key: "Fragance",
        },
        {
            content: "Shaving",
            key: "Shaving",
        },
    ],
};
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
];
const Grooming = (title) => {
    document.title = title.title;
    return (
        <div className={styles.grooming}>
            <div className={styles.introBackground}>
                <Intro
                    title={IntroContent.title}
                    content={IntroContent.content}
                    links={IntroContent.links}
                ></Intro>
            </div>

            <Divider />
            <div className={styles.filterProducts}>
                <Filter />
                <ListProduct products={Products} isSlide={false}></ListProduct>
            </div>
        </div>
    );
};
export default Grooming;
