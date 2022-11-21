import styles from "./gifts.module.scss";
import Intro from "../../components/Intro";
import Divider from "../../components/Divider";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import ListProduct from "../../components/ListProduct";
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllProductByCategory } from '../../redux/product/productsApi';

const IntroContent = {
    title: "Gifts",
    content: "The holiday season is here again. Looking for a special gift for him? From luxury stocking fillers to our selection of this year’s most-wanted designer gifts and watches, we’ve got everything that makes a modern man tick at MR PORTER.",
    links: [
        {
            content: "Gift for kids",
            key: "kids",
        },
    ],
};

const Watches = (title) => {
    document.title = title.title;
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        getAllProductByCategory(dispatch, 'gifts');
    }, []);
    useEffect(() => {
        fetch(`https://json.conmale73.repl.co/products?category=gifts`)
            .then((res) => res.json())
            .then((datas) => {
                setProducts(datas);
            });
    }, []);
    return (
        <div className={styles.gifts}>
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
export default Watches;
