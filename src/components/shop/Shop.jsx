import { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "../animations.css";
import Cart from "../cart/Cart";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import MobileNav from "../navbar/MobileNav";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Shop.module.css";

export default function Shop() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();
    const { section } = useParams();
    const [shoppingList, setShoppingList] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [cartOpened, setCartOpened] = useState(false);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [pageSlide, setPageSlide] = useState("");
    const [sidebarSlide, setSidebarSlide] = useState("");

    useEffect(() => {
        if (data === null) {
            fetch(`https://fakestoreapi.com/products`)
                .then(res => res.json())
                .then(json => {
                    json.map(item => { item.backgroundColor = "#1C2327" });
                    json.map(item => { item.textContent = "Add to cart" });
                    json.map(item => { item.disabled = false });
                    setLoading(false);
                    setData(json);
                    setPageSlide("pageSlide");
                    setSidebarSlide("sidebarSlide");
                })
        }
    }, []);

    useEffect(() => {
        let total = 0;
        let count = 0;
        shoppingList.forEach(item => {
            if (item.count > 1) {
                for (let i = 0; i <= item.count; i++) {
                    total += item.price;
                }
            } else {
                total += item.price;
            }
            count += item.count;
        });
        setItemsInCart(count);
        setSubtotal(Math.round(total));
    }, [shoppingList])

    useEffect(() => {
        if (section !== "shop") {
            setCartOpened(false);
        }
    }, [section]);

    function handleAddItemToList(e) {
        const id = Number(e.target.value);
        e.target.className = styles.clicked;
        data[id - 1].count = 1;
        data[id - 1].backgroundColor = "#608d60";
        data[id - 1].textContent = "Added!";
        data[id - 1].disabled = true;
        setShoppingList([...shoppingList, data[id - 1]]);
    }

    function handleRemoveItem(e) {
        const id = Number(e.target.value);
        shoppingList.forEach((item, index) => {
            if (item.id === id && item.count === 1) {
                data[id - 1].backgroundColor = "#1C2327";
                data[id - 1].textContent = "Add to cart";
                data[id - 1].disabled = false;
                setShoppingList(shoppingList.filter(item => item.id !== Number(e.target.value)));
            } else if (item.id === id && item.count != 1) {
                item.count--;
                setShoppingList([...shoppingList]);
            }
        });
    }

    function handleAddItem(e) {
        shoppingList.forEach(item => {
            if (item.id === Number(e.target.value)) {
                item.count++;
                setShoppingList([...shoppingList]);
            };
        });
    }

    function handleOpenCartClick() {
        const cart = document.getElementById("cart");
        cart.style.transform = "translateX(0)";
        setCartOpened(true);
    }

    function handleCloseCartClick() {
        const cart = document.getElementById("cart");
        cart.style.transform = "translateX(100%)";
        setCartOpened(false)
    }

    function handleMobileMenuClick() {
        const menu = document.getElementById("mobileNav");
        menu.style.transform = "translate(0, 0)";
        menu.style.backgroundColor = "whitesmoke";
    }

    function handleCloseMenuClick() {
        const menu = document.getElementById("mobileNav");
        menu.style.transform = "translate(100%, -100%)";
        menu.style.backgroundColor = "transparent";
    }

    if (loading) {
        return (<>Page is loading...</>)
    }

    return (
        <>
            <Navbar
                count={itemsInCart}
                handleOpenCartClick={handleOpenCartClick}
                handleCloseCartClick={handleCloseCartClick}
                cartOpened={cartOpened}
                section={section}
                handleMobileMenuClick={handleMobileMenuClick} />

            <MobileNav handleCloseMenuClick={handleCloseMenuClick} />

            {section === "shop" ?
                <>
                    <Cart
                        cartOpened={cartOpened}
                        shoppingList={shoppingList}
                        handleRemoveItem={handleRemoveItem}
                        handleAddItem={handleAddItem}
                        subtotal={subtotal} />

                    <section className={styles.shop}>
                        <Sidebar className={sidebarSlide} />
                        <div className={`${styles.all} ${pageSlide}`}>
                            {category === undefined ?
                                data.map((item) => {
                                    return item ? <div className={styles.item} key={uniqueId()}>
                                        <img className={styles.image} src={item.image} />
                                        <h4 className={styles.title}>{item.title}</h4>
                                        <p className={styles.price}>{"$" + item.price}</p>
                                        <p className={styles.rating}>{item.rating.rate}</p>
                                        <button
                                            onClick={handleAddItemToList}
                                            id={item.id}
                                            className={styles.addToCart}
                                            style={{ backgroundColor: item.backgroundColor }}
                                            value={item.id}
                                            disabled={item.disabled}>{item.textContent}</button>
                                    </div> : null;
                                })
                                : data.map((item) => {
                                    if (item.category === category) {
                                        return item ? <div className={styles.item} key={uniqueId()}>
                                            <img className={styles.image} src={item.image} />
                                            <h4 className={styles.title}>{item.title}</h4>
                                            <p className={styles.price}>{"$" + item.price}</p>
                                            <p className={styles.rating}>{item.rating.rate}</p>
                                            <button
                                                onClick={handleAddItemToList}
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
                    </section>

                </>
                :
                <>
                    <Home section={section} />
                </>}

            <Footer />
        </>
    )

}