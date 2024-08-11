import styles from "./Loader.module.css";
import diamondLoader from '../../assets/diamond_loader.gif';

export default function Loader() {

    return (
        <div
            className={styles.loaderContainer}>
            <img
                data-testid="loader"
                className={styles.loader}
                src={diamondLoader}
                alt="diamond loader"
            />
        </div>
    )
}