import React from 'react';
import { Link } from 'react-router-dom';
import MenShoes from '../Data/MenShoes.js';
import styles from './MensWear.module.css'

function MensWear() {
    return (
        <div className={styles.DisplayShoes}>
            {Object.entries(MenShoes).map(([slug, { name, img }]) => (
                <div key={slug}>
                    <Link to={`/Menswear/msw${slug}`}>
                        <div className={styles.productCard}>
                            <div className={styles.badge}>Hot</div>
                            <div className={styles.productTumb}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={styles.productDetails}>
                                <span className={styles.productCategory}>{name}</span>
                                <h4><a href="">Branded Nike Shoes</a></h4>
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

export default MensWear;

