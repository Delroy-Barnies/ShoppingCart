import styles from "./Dropdown.module.css";
import { Link } from "react-router-dom";

export default function Dropdown(props) {

    return (
        <div data-testid="dropdown" className={styles.dropdown}>
            <a className={styles.button}>SHOP ALL</a>
            <div className={styles.dropdownContent}>
                <Link to="../shop/jewelery" className={styles.link}>Jewelery</Link>
                <Link to="../shop/electronics" className={styles.link}>Electronics</Link>
                <Link to="../shop/men's clothing" className={styles.link}>Mens</Link>
                <Link to="../shop/women's clothing" className={styles.link}>Womens</Link>
            </div>
        </div>
    )

}