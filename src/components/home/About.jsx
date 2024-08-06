import { createClient } from 'pexels';
import { useEffect, useState } from "react";
import styles from "./About.module.css";

export default function About() {
    const [background, setBackground] = useState(null);
    const [contentSlide, setContentSlide] = useState("");

    useEffect(() => {
        const client = createClient('p5xyN9jXP0GYqtDH3Skm3nLWaPFcr2FfOwRIOd5cwgnQbpadWFVzVnE1');
        client.photos.show({ id: 12663924 }).then(photo => {
            setBackground(photo.src.large);
        });
        setContentSlide("contentSlide");
    }, []);

    if (!background) {
        return (<>LOADING...</>)
    }

    return (
        <section className={styles.about} >
            <div className={`${styles.content} ${contentSlide}`}>
                <h3 className={styles.heading}>ABOUT US</h3>
                <h4 className={styles.subheading}>Premium Quality Goods <br /> Established in 2024</h4>
                <p className={styles.text}>This is a fictional store and ​none of the products ​displayed here are real.<br /><br />
                    Products information and ​images: <span><a href="https://fakestoreapi.com/" className={styles.link}>Fake Store API</a></span></p>
            </div>
            <div className={styles.image_container}>
                <div className={styles.image} style={{
                    background: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "30% 20%"
                }}></div>
            </div>
        </section>
    )
}