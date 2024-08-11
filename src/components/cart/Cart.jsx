import { uniqueId } from 'lodash';
import React from 'react';
import "../animations.css";
import styles from "./Cart.module.css";

export default function Cart(props) {

    return (

        <section id="cart" className={`${styles.cart} hidden`}>
            <div data-testid="cart" className={styles.all}>
                {props.shoppingList.map((item) => {
                    return item ? <div className={styles.item} key={uniqueId()}>
                        <img className={styles.image} src={item.image} />
                        <div className={styles.infoContainer}>
                            <h4 className={styles.title}>{item.title}</h4>
                            <p className={styles.price}>{"$" + item.price}</p>
                            <div className={styles.itemCount}>
                                <button className={styles.removeItem} value={item.id} onClick={props.handleRemoveItem}>-</button>
                                <p className={styles.count}>{item.count}</p>
                                <button className={styles.addItem} value={item.id} onClick={props.handleAddItem}>+</button>
                            </div>
                        </div>
                    </div> : null;
                })
                }
            </div >
            <div className={styles.checkout}>
                <div className={styles.total}>
                    <h3 className={styles.subtotal}>Subtotal:</h3>
                    <h3 className={styles.price}>{"$" + props.subtotal}</h3>
                </div>
                <button className={styles.checkoutButton}>Check out</button>
                <p className={styles.details}>Shipping taxes and discount codes calculated at checkout</p>
            </div>
        </section >)

}