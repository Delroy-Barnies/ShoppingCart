import { uniqueId } from 'lodash';
import React from 'react';
import "../animations.css";
import styles from "./Items.module.css";

export default function Items(props) {

    return (
        <div className={`${styles.all} ${props.pageSlide}`}>
            {props.category === undefined ?
                props.data.map((item) => {
                    return item ? <div className={styles.item} key={uniqueId()}>
                        <img className={styles.image} src={item.image} />
                        <h4 className={styles.title}>{item.title}</h4>
                        <p className={styles.price}>{"$" + item.price}</p>
                        <p className={styles.rating}>{item.rating.rate}</p>
                        <button
                            onClick={props.handleAddItemToList}
                            id={item.id}
                            className={styles.addToCart}
                            style={{ backgroundColor: item.backgroundColor }}
                            value={item.id}
                            disabled={item.disabled}>{item.textContent}</button>
                    </div> : null;
                })
                : props.data.map((item) => {
                    if (item.category === props.category) {
                        return item ? <div className={styles.item} key={uniqueId()}>
                            <img className={styles.image} src={item.image} />
                            <h4 className={styles.title}>{item.title}</h4>
                            <p className={styles.price}>{"$" + item.price}</p>
                            <p className={styles.rating}>{item.rating.rate}</p>
                            <button
                                onClick={props.handleAddItemToList}
                                id={item.id}
                                className={styles.addToCart}
                                style={{ backgroundColor: item.backgroundColor }}
                                value={item.id}
                                disabled={item.disabled}>{item.textContent}</button>
                        </div> : null;
                    }
                })
            }
        </div >
    )
}