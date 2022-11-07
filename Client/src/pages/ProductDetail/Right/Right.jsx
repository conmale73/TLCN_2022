import styles from "./right.module.scss";
import SizePicker from "../../../components/SizePicker";
import { React ,useState, useEffect } from "react";
import Select from 'react-select'
const ProductInfo = {
    name: "Distressed Denim Jacket",
    description:
        "RRL's denim jacket nods to the Western aesthetics that inspire the label. Made from denim in a rusty brown wash, it's cut for a regular fit and has classic patch pockets on the front.",
    price: "$475",
    image: "https://cache.mrporter.com/variants/images/1647597286496534/in/w358_q60.jpg",
    category: ["clothing", "jackets"],
    designer: "RRL",
    slug: "/clothing/rrl-distressed-denim-jacket",
    sizes: [
        {
            value: "s",
            label: "S",
        },
        {
            value: "m",
            label: "M",
        },
        {
            value: "l",
            label: "L",
        },
        {
            value: "xl",
            label: "XL",
        },
        {
            value: "xxl",
            label: "XXL",
        },
    ],
    quantity: 100,
};

const Right = (props) => {
    props = ProductInfo;

    const options = props.sizes;
    
    const handleChange = (selectedOption) => {
        console.log(`Option selected:`, selectedOption);
    }
    return (
        <div className={styles.right}>
            <div className={styles.container}>
                <div className={styles.designer}>{props.designer}</div>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.quantity}>
                    Quantity: {props.quantity}
                </div>
                <div className={styles.price}>{props.price}</div>
                <div className={styles.size} >
                    Size
                    <Select options={options} onChange={handleChange} className="m-6"/>
                </div>
                <div className={styles.description}>
                    Description:
                    {props.description}
                </div>
                <div className={styles.button}>Add to Bag</div>
            </div>
        </div>
    );
};
export default Right;
