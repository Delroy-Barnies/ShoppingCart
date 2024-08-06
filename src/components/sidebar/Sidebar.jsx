import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar(props) {

    return (
        <section className={`${styles.sidebar} ${props.className}`}>
            <div className={styles.container}>
                <h2 className={styles.heading}>CATEGORIES</h2>
                <Link to="../shop" className={styles.link}>ALL (20)</Link>
                <Link to="../shop/jewelery" className={styles.link}>JEWELERY (4)</Link>
                <Link to="../shop/electronics" className={styles.link}>ELECTRONICS (6)</Link>
                <Link to="../shop/men's clothing" className={styles.link}>MENS (4)</Link>
                <Link to="../shop/women's clothing" className={styles.link}>WOMANS (6)</Link>
            </div>
        </section>
    )

}