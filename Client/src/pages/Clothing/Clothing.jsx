import styles from "./clothing.module.scss";
import Intro from "../../components/Intro";
import Divider from "../../components/Divider";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import ListProduct from "../../components/ListProduct";
import { useState, useEffect, useContext } from "react";

import { productService } from "../../service/product.service";
import { ProductContext } from "../../context/ProductContext";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductByCategory } from "../../redux/product/productsApi";

const IntroContent = {
    title: "Clothing",
    content:
        "Build your new-season wardrobe with our edit of the latest designer menswear, from T-shirts, shorts, polo shirts, lightweight jackets and smart tailoring to casual shirts, pants and denim. Don't forget to check out our shoe selection too, where you'll find loafers, espadrilles, sneakers and more.",
    links: [
        {
            content: "Coats & Jackets",
            key: "coats",
        },

        {
            content: "Sweats",
            key: "sweats",
        },
        {
            content: "Knitwear",
            key: "knitwear",
        },
        {
            content: "Shirts",
            key: "shirts",
        },
        {
            content: "T-Shirts",
            key: "T-Shirts",
        },
        {
            content: "Jeans",
            key: "Jeans",
        },
    ],
};

const Clothing = (title) => {
    document.title = title.title;
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    const results = products.length;
    
    useEffect(() => {
        fetch(`https://json.conmale73.repl.co/products?category=clothing`)
            .then((res) => res.json())
            .then((datas) => {
                setProducts(datas);
            });
    }, []);
    useEffect(() => {
        getAllProductByCategory(dispatch, "clothing");
    }, []);
    return (
        <div className={styles.clothing}>
            <Intro
                title={IntroContent.title}
                content={IntroContent.content}
                links={IntroContent.links}
            ></Intro>
            <Divider />
            <div className={styles.filterProducts}>
                <Filter results={results}/>
                <ListProduct products={products} isSlide={false}></ListProduct>
            </div>
        </div>
    );
};
export default Clothing;
