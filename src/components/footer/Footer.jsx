import styles from "./Footer.module.css";
import globeIcon from '../../assets/globe.svg'
import emailIcon from '../../assets/email.svg'
import githubIcon from '../../assets/github_black.svg'

export default function Footer() {

    return (<footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.coloumn}>
                <h2 style={{ color: "black" }}>CONTACT</h2>
                <p>18 Stanton Ave</p>
                <p>Royal Park</p>
                <p>South Africa</p>
                <p>4012</p>
            </div>
            <div className={`${styles.coloumn} ${styles.get_in_touch_coloumn}`}>
                <h2 style={{ color: "black" }}>GET IN TOUCH</h2>
                <p className={styles.email}><span><img alt="email icon" data-testid="emailImg" className={styles.emailIcon} src={emailIcon} /></span>Email us</p>
                <p>Follow us</p>
            </div>
            <div className={styles.coloumn}>
                <h2 style={{ color: "black" }}>LEGAL</h2>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Refund Policy</p>
                <p>Shipping Policy</p>
            </div>
            <div className={`${styles.coloumn} ${styles.shipping_coloumn}`}>
                <div className={styles.shipping}>
                    <img alt="globe icon" data-testid="globeImg" className={styles.globeIcon} src={globeIcon} />
                    <h5>SHIPPING <br />WORLDWIDE</h5>
                </div>
            </div>
        </div>

        <a className={styles.github_link_container} href="https://github.com/Delroy-Barnies/ShoppingCart">
            <img alt="github icon" data-testid="githubImg" className={styles.githubIcon} src={githubIcon} />
            <p>GITHUB REPOSITORY</p>
        </a>

    </footer>)

}