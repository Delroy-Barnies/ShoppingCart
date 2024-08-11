import { Link } from "react-router-dom";
import cartIcon from '../../assets/cart.svg';
import exitIcon from '../../assets/exit.svg';
import githubIcon from '../../assets/github.svg';
import menuIcon from '../../assets/menu.svg';
import userIcon from '../../assets/user.svg';
import Dropdown from "./Dropdown";
import styles from "./Navbar.module.css";

export default function Navbar(props) {

    return (
        <header className={styles.header}>

            <div className={styles.headerLeftContainer}>
                <Link className={styles.link} to="../">
                    <a className={`${styles.itemContainer} ${styles.brand}`}>
                        <h1 className={styles.mainBrand}>DRENCH</h1>
                        <h2 className={styles.subBrand}>MANUFACTORING CO.</h2>
                    </a>
                </Link>

                <div className={`${styles.itemContainer} ${styles.navigation}`}>
                    <Link to="../about"><a className={styles.navItem}>ABOUT</a></Link>
                    <Link to="../shop" className={styles.shopAll}><Dropdown className={styles.navItem} /></Link>
                    <Link to="../review"><a className={styles.navItem}>REVIEW</a></Link>
                </div>
            </div>

            <div className={styles.linksContainer}>
                {!props.cartOpened ?
                    <div className={styles.links}>
                        <a href="https://github.com/Delroy-Barnies/ShoppingCart" target="blank" className={styles.linkItem}>
                            <img alt="github icon" data-testid="githubImg" src={githubIcon} className={styles.github} />
                        </a>
                        <a href="https://www.linkedin.com/in/delroy-barnies-a6804123b/" target="blank" className={styles.linkItem}>
                            <img alt="profile icon" data-testid="profileImg" src={userIcon} className={styles.user} />
                        </a>
                        <button data-testid="cartButton" onClick={props.handleOpenCartClick} className={styles.cartButton} id={styles.cartButton} disabled={props.section === "shop" ? false : true}>
                            <img alt="cart icon" data-testid="cartImg" src={cartIcon} className={styles.cart} />
                            <div className={styles.curItemsInCartContainer}>
                                <p className={styles.curItemsInCart}>{props.count}</p>
                            </div>
                        </button>
                        <button onClick={props.handleMobileMenuClick} className={styles.menu}><img className={styles.menuIcon} src={menuIcon} /></button>
                    </div> :
                    <button data-testid="closeButton" onClick={props.handleCloseCartClick} className={styles.closeCart}>CLOSE <span className={styles.span}><img className={styles.exitIcon} src={exitIcon}></img></span></button>
                }
            </div>



        </header >
    )
}