import { createClient } from 'pexels';
import { useEffect, useState } from "react";
import About from "./About";
import styles from "./Home.module.css";
import Review from "./Review";

export default function Home(props) {
    const [background, setBackground] = useState(null);

    useEffect(() => {
        const client = createClient('p5xyN9jXP0GYqtDH3Skm3nLWaPFcr2FfOwRIOd5cwgnQbpadWFVzVnE1');
        client.photos.show({ id: 5490198 }).then(photo => {
            setBackground(photo.src.large2x);
        });
    }, []);

    return (
        <>
            <section className={styles.home} style={{
                background: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "20%"
            }}>
                <div className={styles.filter}>
                    {props.section === "about" ? (
                        <About />
                    ) : props.section === "review" ? (
                        <Review />
                    ) : (
                        <About />
                    )}
                </div>
            </section>
        </>
    )
}