import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import styles from "./MobileNav.module.css";

export default function MobileNav(props) {
    const { section } = useParams();

    useEffect(() => {
        const menu = document.getElementById("mobileNav");
        menu.style.transform = "translate(100%, -100%)";
        menu.style.backgroundColor = "transparent";
    }, [section]);

    return (
        <div className={styles.mobileNav} id="mobileNav">
            <div className={styles.links}>
                <div style={{ width: "100%", height: "0", paddingBottom: "100%", position: "relative" }}>
                    <iframe src="https://giphy.com/embed/RFmjTxTo50pkQ" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                <Link to="../about" className={styles.link}>ABOUT</Link>
                <Link to="../shop" className={styles.link}>SHOP</Link>
                <Link to="../review" className={styles.link}>REVIEW</Link>
                <a href="https://github.com/Delroy-Barnies/ShoppingCart" className={styles.link}>PROFILE</a>
                <a href="https://www.linkedin.com/in/delroy-barnies-a6804123b/" className={styles.link}>GITHUB</a>
                <button onClick={props.handleCloseMenuClick} className={`${styles.link} ${styles.closeButton}`}>CLOSE</button>
            </div>
        </div>
    )

}