import styles from "./filter.module.scss";
import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";

const FilterOptions = ["Category", "Size", "Color", "Price"];
const Filter = ({results}) => {

    return (
        <div className={styles.filter}>
            <div className="">{results} results</div>
            {FilterOptions.map((option) => (
                <div className={styles.option}>
                    {option}
                    <span>
                        <ChevronDown />
                    </span>
                    <div className={styles.label}></div>
                </div>
            ))}
        </div>
    );
};
export default Filter;
