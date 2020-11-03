import React from 'react';
import styles from './Home.module.css'
import ProductImage from '../NikeShoe.png'

function Home() {
    return (

        <div>
            <div className={styles.App}>

                <div className={styles.DisplayTextContainer}>
                    <b>FIND YOUR FAST</b>
                    {/* <br /> */}
                    <p className={styles.TagLine}>Our Fastest Running Shoes-Now In New Bold Colors</p>
                    <button className={styles.ShopNowButton}><b>SHOP NOW !</b></button>
                </div>

                <div className={styles.DisplayShoeContainer}>
                    <img src={ProductImage} className={styles.ProductImage1} />
                </div>
            </div>


            <div className={styles.abc}></div>
        </div>

    );
}
export default Home;