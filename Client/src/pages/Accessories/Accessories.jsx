import styles from "./accessories.module.scss";
import Intro from "../../components/Intro";
import Divider from "../../components/Divider";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import ListProduct from "../../components/ListProduct";
const IntroContent = {
    title: "Accessories",
    content: "Add the finishing touches to your outfit with our selection of designer accessories for men. Choose from our range of men's hats, bags, wallets, sunglasses, jewelry, and more, or elevate your formal attire with a designer tie, pocket square, or pair of cufflinks. Discover our collection of luxury accessories to complete your look.",
    links: [
        {
            content: "Backpacks",
            key: "backpacks",
        },

        {
            content: "Hats and Caps",
            key: "hat",
        },
        {
            content: "Jewelry",
            key: "jewelry",
        },
        {
            content: "Belts",
            key: "Belts",
        },
        {
            content: "Wallets",
            key: "wallets",
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

]
const Accessories = (title) => {
    document.title = title.title;
    return (
        <div className={styles.accessories}>
            <Intro
                title={IntroContent.title}
                content={IntroContent.content}
                links={IntroContent.links}
            ></Intro>
            <Divider />
            <div className={styles.filterProducts}>
                <Filter />
                <ListProduct products={Products} isSlide={false}></ListProduct>
            </div>
        </div>
    );
};
export default Accessories;
