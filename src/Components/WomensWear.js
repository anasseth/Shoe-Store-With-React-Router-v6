import React from 'react';
import { Link } from 'react-router-dom';
import WomenShoes from '../Data/WomenShoes.js';
import styles from './WomensWear.module.css'

function WomensWear() {
    return (
        <div className={styles.DisplayShoes}>
            {Object.entries(WomenShoes).map(([slug, { name, img }]) => (
                <div key={slug}>
                    <Link to={`/Womenswear/msw${slug}`}>
                        <div className={styles.productCard}>
                            <div className={styles.badge}>Hot</div>
                            <div className={styles.productTumb}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={styles.productDetails}>
                                <span className={styles.productCategory}>Branded Nike Shoes</span>
                                <h4><a href="">{name}</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                                <div className={styles.productBottomDetails}>
                                    <div className={styles.productPrice}><small className={styles.cuttedPrice}>$96.00</small>$230.99</div>
                                    <div className={styles.productLinks}>
                                        <a href=""><i className="fa fa-heart"></i></a>
                                        <a href=""><i className="fa fa-shopping-cart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default WomensWear;