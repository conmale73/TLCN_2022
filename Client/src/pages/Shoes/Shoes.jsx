import styles from "./shoes.module.scss";
import Intro from "../../components/Intro";
import Divider from "../../components/Divider";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import ListProduct from "../../components/ListProduct";
import { useState, useEffect, useContext } from "react";

const IntroContent = {
    title: "Shoes",
    content: "Build your look from the ground up with the best selection of men’s shoes and boots, including our spring and summer edit of loafers, sandals, espadrilles and slides. Sneakerhead? You’ve come to the right place - you’ll find the latest sneaker releases from the likes of Nike, Gucci, and Balenciaga here.",
    links: [
        {
            content: "Sneakers",
            key: "sneakers",
        },

        {
            content: "Boots",
            key: "boots",
        },
        {
            content: "Formal Shoes",
            key: "formal",
        },
        {
            content: "Sandals",
            key: "sandals",
        },
    ],
};

const Shoes = (title) => {
    document.title = title.title;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://json.conmale73.repl.co/products?category=shoes`)
            .then((res) => res.json())
            .then((datas) => {
                setProducts(datas);
            });
    }, []);

    return (
        <div className={styles.shoes}>
            <Intro
                title={IntroContent.title}
                content={IntroContent.content}
                links={IntroContent.links}
            ></Intro>
            <Divider />
            <div className={styles.filterProducts}>
                <Filter />
                <ListProduct products={products} isSlide={false}></ListProduct>
            </div>
        </div>
    );
};
export default Shoes;
