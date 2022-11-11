import styles from './search.module.scss';
import { useState } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import ListProduct from '../../components/ListProduct';
import Intro from '../../components/Intro';
import Divider from '../../components/Divider';
import ProductCard from '../../components/ProductCard';
import Filter from "../../components/Filter";

const inputSearch = localStorage.getItem('inputSearch').toString();
const IntroContent = {
    title: "Search result for " + `${inputSearch}`,
    content: "",
    links: [
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

const Search = (title) => {
    document.title = title.title;
    return (
        <div className={styles.search}>
            <Intro
                title={IntroContent.title}
                content={IntroContent.content}
                links={IntroContent.links}
            ></Intro>
            <Divider/>
            <div className={styles.filterProducts}>
                <Filter />
                <ListProduct products={Products} isSlide={false}></ListProduct>
            </div>
        </div>
    )
}
export default Search;