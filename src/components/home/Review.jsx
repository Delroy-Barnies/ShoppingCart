import { createClient } from 'pexels';
import { useEffect, useState } from "react";
import styles from "./Review.module.css";

export default function Review() {
    const [background, setBackground] = useState(null);
    const [contentSlide, setContentSlide] = useState("");

    useEffect(() => {
        const client = createClient('p5xyN9jXP0GYqtDH3Skm3nLWaPFcr2FfOwRIOd5cwgnQbpadWFVzVnE1');
        client.photos.show({ id: 18866190 }).then(photo => {
            setBackground(photo.src.large);
        });
        setContentSlide("contentSlide");
    }, []);

    return (
        <section className={styles.about} >
            <div className={styles.image_container}>
                <div className={styles.image} style={{
                    background: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "50% 50%",
                    backgroundSize: "100%"
                }}></div>
            </div>
            <div className={`${styles.content} ${contentSlide}`}>
                <h3 className={styles.heading}>REVIEW</h3>
                <h4 className={styles.subheading}>Daily Bugle</h4>
                <p className={styles.text}>This is a fictional review for a fictional online store (^_^)
                    Please enjoy the rest of the website!</p>
                <p className={styles.text}>- Some Bot</p>
            </div>
        </section >
    )
}