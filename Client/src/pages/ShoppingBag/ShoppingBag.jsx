import styles from "./shoppingBag.module.scss";
import { useState, useEffect } from "react";
import Intro from "../../components/Intro";
import Divider from "../../components/Divider";
import BagItem from "./BagItem";
import Payment from "./Payment";
const Bag = [
    {
        name: "Distressed Denim Jacket",
        description:
            "RRL's denim jacket nods to the Western aesthetics that inspire the label. Made from denim in a rusty brown wash, it's cut for a regular fit and has classic patch pockets on the front.",
        price: 475,
        image: "https://cache.mrporter.com/variants/images/1647597286496534/in/w358_q60.jpg",
        category: ["clothing", "jackets"],
        designer: "RRL",
        slug: "/clothing/rrl-distressed-denim-jacket",
        size: ["S", "M", "L", "XL"],
    },
    {
        name: "Leather Chelsea Boots",
        description:
            "Certain styles never lose their appeal, which is something TOM FORD's Chelsea boots can attest to. They're crafted from supple leather that promises to soften over time and set on stacked soles. Thanks to elasticated side gussets and heel tabs, they slip on and off easily.",
        price: 2175,
        image: "https://cache.mrporter.com/variants/images/1647597293126568/in/w560_q60.jpg",
        category: ["shoes", "boots"],
        designer: "TOM FORD",
        slug: "/shoes/tom-ford-leather-chelsea-boots",
        size: ["38", "39", "40", "41"],
    },
];

const ShoppingBag = (title) => {
    document.title = title.title;
    const [items, setItems] = useState(Bag);
    const [count, setCount] = useState(2)
    const [total, setTotal] = useState(0);
    return (
        <div className={styles.shoppingBag}>
            <Intro title="Shopping Bag" content={`${count}` + " items"} links={[]} />
            <Divider />
            <div className={styles.container}>
                <div className={styles.bagItems}>
                    {items.map((item, index) => {
                        return (
                            <>
                                <BagItem item={item} key={index} />
                            </>
                        );
                    })}
                </div>
                <div className={styles.payment}>
                <Payment total={total} />

                </div>
            </div>
        </div>
    );
};
export default ShoppingBag;
